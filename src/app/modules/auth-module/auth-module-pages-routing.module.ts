import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "./components/login/login-page.component";
import { HomePageComponent } from "./home/home-page.component";



const routes: Routes = [
    {
        path: "home",
        component: HomePageComponent,
        children: [
            {
                path: "login",
                component: LoginPageComponent
            }
        ]  
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AuthModulePagesRoutingModule {}
  