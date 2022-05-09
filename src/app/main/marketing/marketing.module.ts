import { NgModule } from '@angular/core';
import { MarketingComponent } from './marketing/marketing.component';
import { Route, RouterModule } from '@angular/router';
import { GeneralSharedModule } from 'src/app/core/modules/general-shared.module';

const routes: Route[] = [
  { path: '', component: MarketingComponent }
];

@NgModule({
  declarations: [
    MarketingComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    GeneralSharedModule
  ]
})
export class MarketingModule { }
