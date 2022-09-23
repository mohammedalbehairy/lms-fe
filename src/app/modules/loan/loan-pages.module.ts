import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxMaskModule } from "ngx-mask";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { LoanActionPageComponent } from "./components/loan-action/loan-action-page.component";
import { LoanPagesRoutingModule } from "./loan-pages-routing.module";

@NgModule({
    declarations: [
        HomePageComponent,
        LoanActionPageComponent
    ],
    imports: [
        CommonModule,
        LoanPagesRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        CoreCommonModule,
        NgxMaskModule.forRoot()
    ],
})
export class LoanPagesModule {}