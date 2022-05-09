import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { GeneralSharedModule } from 'src/app/core/modules/general-shared.module';
import { Route, RouterModule } from '@angular/router';
import { OvLeadTrendsComponent } from './overview/ov-lead-trends/ov-lead-trends.component';

const routes: Route[] = [
  { path: '', component: OverviewComponent }
];

@NgModule({
  declarations: [
    OverviewComponent,
    OvLeadTrendsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    GeneralSharedModule
  ]
})
export class OverviewModule { }
