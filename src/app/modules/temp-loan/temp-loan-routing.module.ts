import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './loans/loans.component';
import { RepaymentScheduleComponent } from './repayment-schedule/repayment-schedule.component';
import { LoanListService } from './services/loan-list.service';
import { LoanScheduleService } from './services/loan-schedule.service';

const routes: Routes = [
  {
    path: 'list',
    component: LoansComponent,
    resolve: {
      lls: LoanListService,
    },
    data: { animation: 'UserListComponent' },
  },
  {
    path: 'schedule',
    component: RepaymentScheduleComponent,
    resolve: {
      lss: LoanScheduleService,
    },
    data: { animation: 'UserListComponent' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TempLoanRoutingModule {}
