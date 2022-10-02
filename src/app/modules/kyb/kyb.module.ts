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

import { KybRoutingModule } from './kyb-routing.module';
import { AddressComponent } from './components/address/address.component';
import { FinancialComponent } from './components/financial/financial.component';
import { InfoComponent } from './components/info/info.component';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import { ECommerceComponent } from './components/e-commerce/e-commerce.component';
import { OtherInfoComponent } from './components/other-info/other-info.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AddressComponent,
    FinancialComponent,
    InfoComponent,
    DocumentUploadComponent,
    ECommerceComponent,
    OtherInfoComponent,
  ],
  imports: [
    CommonModule,
    KybRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CoreCommonModule,
    FormWizardModule,
    NgSelectModule,
    Ng2FlatpickrModule,
    NouisliderModule,
    CardSnippetModule,
    SharedModule,
  ],
  providers: [],
})
export class KybModule {}
