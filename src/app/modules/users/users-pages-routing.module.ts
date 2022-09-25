import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserProfilePageComponent } from "./components/user-profile/user-profile-page.component";



const routes: Routes = [
    {
        path: "profile",
        component: UserProfilePageComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class UsersPagesRoutingModule {}
  