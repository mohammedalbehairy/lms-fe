import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { LoanActionPageComponent } from "./components/loan-action/loan-action-page.component";

const routes: Routes = [
    {
        path: "home",
        component: HomePageComponent
    },
    {
        path: 'loanaction',
        component : LoanActionPageComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class LoanPagesRoutingModule {}
  