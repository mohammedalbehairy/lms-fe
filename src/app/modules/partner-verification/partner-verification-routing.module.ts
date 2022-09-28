import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProviderRedirectionComponent } from './components/data-provider-redirection/data-provider-redirection.component';
import { InitialApproveComponent } from './components/initial-approve/initial-approve.component';
import { KeepDocsComponent } from './components/keep-docs/keep-docs.component';
import { RevenuePageComponent } from './components/revenue-page/revenue-page.component';
import { TelrLoginComponent } from './components/telr-login/telr-login.component';

const routes: Routes = [
  {
    path: 'revenue',
    component: RevenuePageComponent,
  },
  {
    path: 'telr-login',
    component: TelrLoginComponent,
  },
  {
    path: 'initial-approve',
    component: InitialApproveComponent,
  },
  {
    path: 'documents',
    component: KeepDocsComponent,
  },
  {
    path: 'data-provider-redirection',
    component: DataProviderRedirectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerVerificationRoutingModule {}
