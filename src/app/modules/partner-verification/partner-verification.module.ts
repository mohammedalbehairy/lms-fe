import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerVerificationRoutingModule } from './partner-verification-routing.module';
import { RevenuePageComponent } from './components/revenue-page/revenue-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreCommonModule } from '@core/common.module';
import { NgxMaskModule } from 'ngx-mask';
import { InitialApproveComponent } from './components/initial-approve/initial-approve.component';
import { KeepDocsComponent } from './components/keep-docs/keep-docs.component';
import { TelrLoginComponent } from './components/telr-login/telr-login.component';
import { DataProviderRedirectionComponent } from './components/data-provider-redirection/data-provider-redirection.component';
import { BlockUIModule } from 'ng-block-ui';
import { CoreBlockUiComponent } from '@core/components/core-card/core-block-ui/core-block-ui.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RevenuePageComponent,
    DataProviderRedirectionComponent,
    InitialApproveComponent,
    KeepDocsComponent,
    TelrLoginComponent,
  ],
  imports: [
    CommonModule,
    PartnerVerificationRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CoreCommonModule,
    SharedModule,
    NgxMaskModule.forRoot(),
    BlockUIModule.forRoot({ template: CoreBlockUiComponent }),
  ],
})
export class PartnerVerificationModule {}
