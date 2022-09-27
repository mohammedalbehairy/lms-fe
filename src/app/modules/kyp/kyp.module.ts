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

import { BusinessDetailsAddressPageComponent } from './components/business-details-address/business-details-address-page.component';
import { BusinessDetailsFinancialPageComponent } from './components/business-details-financial/business-details-financial-page.component';
import { BusinessDetailsOtherPageComponent } from './components/business-details-other/business-details-other-page.component';
import { BusinessDetailsOther2PageComponent } from './components/business-details-other2/business-details-other2-page.component';
import { BusinessDocumentUploadPageComponent } from './components/business-document-upload/business-document-upload-page.component';
import { BusinessDetailsInfoPageComponent } from './components/business-details-info/business-details-info-page.component';


import { KypRoutingModule } from './kyp-routing.module';
import { stepperModule } from '../shared/stepper/stepper.module';

@NgModule({
  declarations: [
    BusinessDetailsInfoPageComponent,
    BusinessDetailsAddressPageComponent,
    BusinessDetailsFinancialPageComponent,
    BusinessDetailsOtherPageComponent,
    BusinessDetailsOther2PageComponent,
    BusinessDocumentUploadPageComponent,
    
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
    stepperModule
  ],
  providers: [],
})
export class KypModule {}
