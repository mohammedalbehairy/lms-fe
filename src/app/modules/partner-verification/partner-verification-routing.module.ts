import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialApproveComponent } from './components/initial-approve/initial-approve.component';
import { KeepDocsComponent } from './components/keep-docs/keep-docs.component';
import { RevenueLoginPageComponent } from './components/revenue-login/revenue-login-page.component';
import { RevenuePageComponent } from './components/revenue-page/revenue-page.component';

const routes: Routes = [
  {
    path: 'revenue',
    component: RevenuePageComponent,
  },
  {
    path: 'revenuelogin',
    component: RevenueLoginPageComponent,
  },
  {
    path: 'initial-approve',
    component: InitialApproveComponent,
  },
  {
    path: 'documents',
    component: KeepDocsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerVerificationRoutingModule {}
