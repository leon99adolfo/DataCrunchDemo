import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NavigationService } from '../../navigation.service';
import { LayoutNavigationItem } from '../../navigation.types';
import { VerticalComponent } from '../vertical.component';

@Component({
  selector: 'app-basic-nav-item',
  templateUrl: './basic-nav-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicNavItemComponent implements OnInit, OnDestroy {
  
  @Input() item: LayoutNavigationItem;
  @Input() name: string;

  private _verticalComponent: VerticalComponent;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  // Constructor
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _navigationService: NavigationService,
  ) {
  }

  // Events
  ngOnInit(): void {
    // Get the parent navigation component
    this._verticalComponent = this._navigationService.getComponent(this.name);

    // Subscribe to onRefreshed on the navigation component
    this._verticalComponent.onRefreshed.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next('');
    this._unsubscribeAll.complete();
  }
}
