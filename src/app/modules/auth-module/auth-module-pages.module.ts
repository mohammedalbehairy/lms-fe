import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxMaskModule } from "ngx-mask";
import { AuthModulePagesRoutingModule } from "./auth-module-pages-routing.module";
import { ConsentPageComponent } from "./components/consent/consent-page.component";
import { LoginPageComponent } from "./components/login/login-page.component";
import { RegisterPageComponent } from "./components/register/register-page.component";
import { HomePageComponent } from "./home/home-page.component";

@NgModule({
    declarations: [
        HomePageComponent,
        LoginPageComponent,
        RegisterPageComponent,
        ConsentPageComponent
    ],
    imports: [
        CommonModule,
        AuthModulePagesRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        CoreCommonModule,
        NgxMaskModule.forRoot()
    ],
})
export class AuthModulePagesModule {}