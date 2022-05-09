import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialDataResolver } from './app.resolvers';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { layout: 'vertical' },
    resolve : { initialData: InitialDataResolver },
    children: [
      { path: 'overview', loadChildren: () => import('src/app/main/overview/overview.module').then(m => m.OverviewModule) },
      { path: 'estimators', loadChildren: () => import('src/app/main/estimators/estimators.module').then(m => m.EstimatorsModule) },
      { path: 'marketing', loadChildren: () => import('src/app/main/marketing/marketing.module').then(m => m.MarketingModule) },
      { path: 'financial', loadChildren: () => import('src/app/main/financial/financial.module').then(m => m.FinancialModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
