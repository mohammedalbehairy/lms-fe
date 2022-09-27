import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanApprovePageComponent } from './components/loan-approve/loan-approve-page.component';
import { LoanTermsPageComponent } from './components/loan-terms/loan-terms-page.component';
import { ReviewLoanAgreementPageComponent } from './components/review-loan-agreement/review-loan-agreement-page.component';
import { ReviewLoanDetailsPageComponent } from './components/review-loan-details/review-loan-details-page.component';

const routes: Routes = [
  {
    path: 'loanterms',
    component: LoanTermsPageComponent,
  },
  {
    path: 'reviewloan',
    component: ReviewLoanDetailsPageComponent
  },
  {
    path: 'loanagreement',
    component: ReviewLoanAgreementPageComponent
  },
  {
    path: 'loanapprove',
    component: LoanApprovePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KycRoutingModule {}
