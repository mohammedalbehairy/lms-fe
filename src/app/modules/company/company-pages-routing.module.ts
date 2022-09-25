import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompanyProfilePageComponent } from "./components/company-profile/company-profile-page.component";



const routes: Routes = [
    {
        path: "profile",
        component: CompanyProfilePageComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class CompanyPagesRoutingModule {}
  