import { NgModule } from '@angular/core';
import { FinancialComponent } from './financial/financial.component';
import { Route, RouterModule } from '@angular/router';
import { GeneralSharedModule } from 'src/app/core/modules/general-shared.module';

const routes: Route[] = [
  { path: '', component: FinancialComponent }
];

@NgModule({
  declarations: [
    FinancialComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    GeneralSharedModule
  ]
})
export class FinancialModule { }
