import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VerticalComponent } from './vertical/vertical.component';
import { BasicNavItemComponent } from './vertical/basic-nav-item/basic-nav-item.component';
import { GeneralSharedModule } from 'src/app/core/modules/general-shared.module';

@NgModule({
  declarations: [
    VerticalComponent,
    BasicNavItemComponent
  ],
  imports: [
    RouterModule,
    GeneralSharedModule,
  ],
  exports: [
    VerticalComponent,
  ]
})
export class NavigationModule { }
