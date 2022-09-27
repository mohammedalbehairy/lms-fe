import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormWizardModule } from 'app/main/forms/form-wizard/form-wizard.module';
import { BusinessDetailsInfoPageComponent } from './components/business-details-info/business-details-info-page.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { NouisliderModule } from 'ng2-nouislider';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';

import { BusinessDetailsAddressPageComponent } from './components/business-details-address/business-details-address-page.component';
import { BusinessDetailsFinancialPageComponent } from './components/business-details-financial/business-details-financial-page.component';
import { BusinessDetailsOtherPageComponent } from './components/business-details-other/business-details-other-page.component';
import { BusinessDetailsOther2PageComponent } from './components/business-details-other2/business-details-other2-page.component';
import { PersonalDetailsIdentifcationPageComponent } from './components/personal-details-identifcation/personal-details-identifcation-page.component';
import { PersonalDetailsAddressPageComponent } from './components/personal-details-address/personal-details-address-page.component';
import { PersonalDetailsHomeAddressPageComponent } from './components/personal-details-home-address/personal-details-home-address-page.component';
import { PersonalInfoConfirmPageComponent } from './components/personal-info-confirm/personal-info-confirm-page.component';
import { BusinessDocumentUploadPageComponent } from './components/business-document-upload/business-document-upload-page.component';
import { BusinessDocumentPassportPageComponent } from './components/business-document-passport/business-document-passport-page.component';
import { ShareholderInformationPageComponent } from './components/shareholder-information/shareholder-information-page.component';
import { LoanTermsPageComponent } from './components/loan-terms/loan-terms-page.component';
import { ReviewLoanDetailsPageComponent } from './components/review-loan-details/review-loan-details-page.component';
import { ReviewLoanAgreementPageComponent } from './components/review-loan-agreement/review-loan-agreement-page.component';
import { LoanApprovePageComponent } from './components/loan-approve/loan-approve-page.component';

import { StepperService } from './services/stepper.service';

import { KypRoutingModule } from './kyp-routing.module';
import { HomePageComponent } from './home/home-page.component';
import { StepperPageComponent } from '../shared/stepper/stepper-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    BusinessDetailsInfoPageComponent,
    BusinessDetailsAddressPageComponent,
    BusinessDetailsFinancialPageComponent,
    BusinessDetailsOtherPageComponent,
    BusinessDetailsOther2PageComponent,
    PersonalDetailsIdentifcationPageComponent,
    PersonalDetailsAddressPageComponent,
    PersonalDetailsHomeAddressPageComponent,
    PersonalInfoConfirmPageComponent,
    BusinessDocumentUploadPageComponent,
    BusinessDocumentPassportPageComponent,
    ShareholderInformationPageComponent,
    LoanTermsPageComponent,
    ReviewLoanDetailsPageComponent,
    ReviewLoanAgreementPageComponent,
    LoanApprovePageComponent,
    StepperPageComponent
  ],
  imports: [
    CommonModule,
    KypRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CoreCommonModule,
    FormWizardModule,
    NgSelectModule,
    Ng2FlatpickrModule,
    NouisliderModule,
    CardSnippetModule,
  ],
  providers: [StepperService],
})
export class KypModule {}
