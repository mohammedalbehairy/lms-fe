import { UserErrorComponent } from './components/user-error/user-error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MobileVerificationComponent } from './components/mobile-verification/mobile-verification.component';
import { MobileVerifiedComponent } from './components/mobile-verified/mobile-verified.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: SignUpComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'user-error',
    component: UserErrorComponent,
  },
  {
    path: 'mobile-verification',
    component: MobileVerificationComponent,
  },
  {
    path: 'mobile-verified',
    component: MobileVerifiedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
