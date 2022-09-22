import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreCommonModule } from '@core/common.module';
import { NgxMaskModule } from 'ngx-mask';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { UserErrorComponent } from './components/user-error/user-error.component';
import { MobileVerificationComponent } from './components/mobile-verification/mobile-verification.component';
import { MobileVerifiedComponent } from './components/mobile-verified/mobile-verified.component';
import { SignInUaePassComponent } from './components/sign-in-uae-pass/sign-in-uae-pass.component';
import { SignUpUaePassComponent } from './components/sign-up-uae-pass/sign-up-uae-pass.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    UserErrorComponent,
    MobileVerificationComponent,
    MobileVerifiedComponent,
    SignInUaePassComponent,
    SignUpUaePassComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CoreCommonModule,
    NgxMaskModule.forRoot(),
  ],
})
export class AuthModule {}
