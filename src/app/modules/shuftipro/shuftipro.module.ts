import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShuftiproRoutingModule } from './shuftipro-routing.module';
import { MainComponent } from './components/main/main.component';
import { WebcamModule } from 'ngx-webcam';
import { DataApproveComponent } from './components/data-approve/data-approve.component';
import { stepperModule } from '../shared/stepper/stepper.module';
import { KybRoutingModule } from '../kyb/kyb-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormWizardModule } from 'app/main/forms/form-wizard/form-wizard.module';
import { CoreCommonModule } from '@core/common.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
  declarations: [MainComponent, DataApproveComponent],
  imports: [
    CommonModule,
    ShuftiproRoutingModule,
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
    stepperModule,
    WebcamModule,
  ],
})
export class ShuftiproModule {}
