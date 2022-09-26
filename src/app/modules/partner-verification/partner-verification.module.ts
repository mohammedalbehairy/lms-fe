import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerVerificationRoutingModule } from './partner-verification-routing.module';
import { RevenueLoginPageComponent } from './components/revenue-login/revenue-login-page.component';
import { RevenuePageComponent } from './components/revenue-page/revenue-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreCommonModule } from '@core/common.module';
import { NgxMaskModule } from 'ngx-mask';
import { InitialApproveComponent } from './components/initial-approve/initial-approve.component';
import { KeepDocsComponent } from './components/keep-docs/keep-docs.component';

@NgModule({
  declarations: [
    RevenuePageComponent,
    RevenueLoginPageComponent,
    InitialApproveComponent,
    KeepDocsComponent,
  ],
  imports: [
    CommonModule,
    PartnerVerificationRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CoreCommonModule,
    NgxMaskModule.forRoot(),
  ],
})
export class PartnerVerificationModule {}
