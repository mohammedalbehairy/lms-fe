import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialApprovalComponent } from './initial-approval/initial-approval.component';
import { LoanFinalComponent } from './loan-final/loan-final.component';
import { LoanTermsPageComponent } from './loan-terms/loan-terms-page.component';

const routes: Routes = [
  // {
  //   path: 'list',
  //   component: LoansComponent,
  //   resolve: {
  //     lls: LoanListService,
  //   },
  //   data: { animation: 'UserListComponent' },
  // },
  // {
  //   path: 'schedule',
  //   component: RepaymentScheduleComponent,
  //   resolve: {
  //     lss: LoanScheduleService,
  //   },
  //   data: { animation: 'UserListComponent' },
  // },
  {
    path: 'initial-approval',
    component: InitialApprovalComponent,
    data: { animation: 'UserListComponent' },
  },
  {
    path: 'term',
    component: LoanTermsPageComponent,
    data: { animation: 'UserListComponent' },
  },
  {
    path: 'final',
    component: LoanFinalComponent,
    data: { animation: 'UserListComponent' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TempLoanRoutingModule {}
