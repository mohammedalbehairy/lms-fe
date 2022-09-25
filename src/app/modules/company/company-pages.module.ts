import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxMaskModule } from "ngx-mask";
import { CompanyProfilePageComponent } from "./components/company-profile/company-profile-page.component";
import { CompanyPagesRoutingModule } from "./company-pages-routing.module";

@NgModule({
    declarations: [
        CompanyProfilePageComponent
    ],
    imports: [
        CommonModule,
        CompanyPagesRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        CoreCommonModule,
        NgxMaskModule.forRoot()
    ],
})
export class CompanyPagesModule {}