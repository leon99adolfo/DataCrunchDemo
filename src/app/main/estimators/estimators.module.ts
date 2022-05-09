import { NgModule } from '@angular/core';
import { EstimatorsComponent } from './estimators/estimators.component';
import { Route, RouterModule } from '@angular/router';
import { GeneralSharedModule } from 'src/app/core/modules/general-shared.module';

const routes: Route[] = [
  { path: '', component: EstimatorsComponent }
];

@NgModule({
  declarations: [
    EstimatorsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    GeneralSharedModule
  ]
})
export class EstimatorsModule { }
