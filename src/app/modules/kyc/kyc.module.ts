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

import { PersonalDetailsIdentifcationPageComponent } from './components/personal-details-identifcation/personal-details-identifcation-page.component';
import { PersonalDetailsAddressPageComponent } from './components/personal-details-address/personal-details-address-page.component';
import { PersonalDetailsHomeAddressPageComponent } from './components/personal-details-home-address/personal-details-home-address-page.component';
import { PersonalInfoConfirmPageComponent } from './components/personal-info-confirm/personal-info-confirm-page.component';
import { BusinessDocumentPassportPageComponent } from './components/business-document-passport/business-document-passport-page.component';
import { ShareholderInformationPageComponent } from './components/shareholder-information/shareholder-information-page.component';


import { KycRoutingModule } from './kyc-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PersonalDetailsIdentifcationPageComponent,
    PersonalDetailsAddressPageComponent,
    PersonalDetailsHomeAddressPageComponent,
    PersonalInfoConfirmPageComponent,
    BusinessDocumentPassportPageComponent,
    ShareholderInformationPageComponent,
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
    SharedModule
  ],
  providers: [],
})
export class KycModule {}
