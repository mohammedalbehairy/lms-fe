import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DocumentsPageComponent } from "./components/documents-page/documents-page.component";
import { RevenueLoginPageComponent } from "./components/revenue-login/revenue-login-page.component";
import { RevenuePageComponent } from "./components/revenue-page/revenue-page.component";
import { RevenuePreApprovePageComponent } from "./components/revenue-preapprove/revenue-preapprove-page.component";
import { WelcomePageComponent } from "./components/welcome-page/welcome-page.component";



const routes: Routes = [
    {
        path: "welcome",
        component: WelcomePageComponent
    },
    {
        path: "documents",
        component: DocumentsPageComponent
    },
    {
        path: "revenue",
        component: RevenuePageComponent
    },
    {
        path: "revenuelogin",
        component: RevenueLoginPageComponent
    },
    {
        path: "revenuepreapproval",
        component: RevenuePreApprovePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class WelcomePagesRoutingModule {}
  