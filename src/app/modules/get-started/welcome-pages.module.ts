import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxMaskModule } from "ngx-mask";
import { DocumentsPageComponent } from "./components/documents-page/documents-page.component";
import { RevenueLoginPageComponent } from "./components/revenue-login/revenue-login-page.component";
import { RevenuePageComponent } from "./components/revenue-page/revenue-page.component";
import { RevenuePreApprovePageComponent } from "./components/revenue-preapprove/revenue-preapprove-page.component";
import { WelcomePageComponent } from "./components/welcome-page/welcome-page.component";
import { WelcomePagesRoutingModule } from "./welcome-pages-routing.module";

@NgModule({
    declarations: [
        WelcomePageComponent,
        DocumentsPageComponent,
        RevenuePageComponent,
        RevenueLoginPageComponent,
        RevenuePreApprovePageComponent
    ],
    imports: [
        CommonModule,
        WelcomePagesRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        CoreCommonModule,
        NgxMaskModule.forRoot()
    ],
})
export class WelcomePagesModule {}