import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreCommonModule } from '@core/common.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CoreCommonModule,
    NgxMaskModule.forRoot()
  ],
})
export class AuthModule {}
