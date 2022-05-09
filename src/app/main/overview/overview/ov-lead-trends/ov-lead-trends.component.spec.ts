import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvLeadTrendsComponent } from './ov-lead-trends.component';

describe('OvLeadTrendsComponent', () => {
  let component: OvLeadTrendsComponent;
  let fixture: ComponentFixture<OvLeadTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvLeadTrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OvLeadTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
