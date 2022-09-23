import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { LoanActionPageComponent } from "./components/loan-action/loan-action-page.component";
import { LoanApprovePageComponent } from "./components/loan-approve/loan-approve-page.component";
import { LoanDetailsPageComponent } from "./components/loan-details/loan-details-page.component";

const routes: Routes = [
    {
        path: "home",
        component: HomePageComponent
    },
    {
        path: 'loanaction',
        component : LoanActionPageComponent
    },
    {
        path : 'loanapprove',
        component: LoanApprovePageComponent
    },
    {
        path: 'loandetails',
        component: LoanDetailsPageComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class LoanPagesRoutingModule {}
  