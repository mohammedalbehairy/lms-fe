import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConsentPageComponent } from "./components/consent/consent-page.component";
import { LoginPageComponent } from "./components/login/login-page.component";
import { RegisterPageComponent } from "./components/register/register-page.component";
import { VerifyPageComponent } from "./components/verify/verify-page.component";
import { HomePageComponent } from "./home/home-page.component";



const routes: Routes = [
    {
        path: "home",
        component: HomePageComponent,
        children: [
            {
                path: "login",
                component: LoginPageComponent
            },
            {
                path: "register",
                component: RegisterPageComponent
            },
            {
                path: "verify",
                component: VerifyPageComponent
            },
            {
                path: "consent",
                component : ConsentPageComponent
            }
        ]  
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AuthModulePagesRoutingModule {}
  