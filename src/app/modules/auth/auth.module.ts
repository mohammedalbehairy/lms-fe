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
import { SignInUaePassComponent } from './components/sign-in-uae-pass/sign-in-uae-pass.component';
import { SignUpUaePassComponent } from './components/sign-up-uae-pass/sign-up-uae-pass.component';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    UserErrorComponent,
    MobileVerificationComponent,
    SignInUaePassComponent,
    SignUpUaePassComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CoreCommonModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
  ],
})
export class AuthModule {}
