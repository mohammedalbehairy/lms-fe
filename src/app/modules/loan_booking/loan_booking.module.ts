import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormWizardModule } from 'app/main/forms/form-wizard/form-wizard.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { NouisliderModule } from 'ng2-nouislider';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';


import { KycRoutingModule } from './loan_booking-routing.module';
import { stepperModule } from '../shared/stepper/stepper.module';
import { LoanTermsPageComponent } from './components/loan-terms/loan-terms-page.component';
import { ReviewLoanDetailsPageComponent } from './components/review-loan-details/review-loan-details-page.component';
import { ReviewLoanAgreementPageComponent } from './components/review-loan-agreement/review-loan-agreement-page.component';
import { LoanApprovePageComponent } from './components/loan-approve/loan-approve-page.component';

@NgModule({
  declarations: [
    LoanTermsPageComponent,
    ReviewLoanDetailsPageComponent,
    ReviewLoanAgreementPageComponent,
    LoanApprovePageComponent,
  ],
  imports: [
    CommonModule,
    KycRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CoreCommonModule,
    FormWizardModule,
    NgSelectModule,
    Ng2FlatpickrModule,
    NouisliderModule,
    CardSnippetModule,
    stepperModule
  ],
  providers: [],
})
export class LoanBookingModule {}
