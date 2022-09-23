import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomePageComponent } from "../createloan/home/home-page.component";
import { CreateLoanPagesRoutingModule } from "./createloan-pages-routing.module";
import { FormWizardModule } from 'app/main/forms/form-wizard/form-wizard.module';
import { BusinessDetailsInfoPageComponent } from "./business-details-info/business-details-info-page.component";
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { BusinessDetailsAddressPageComponent } from "./business-details-address/business-details-address-page.component";

@NgModule({
    declarations: [
        HomePageComponent,
        BusinessDetailsInfoPageComponent,
        BusinessDetailsAddressPageComponent,
    ],
    imports: [
        CommonModule,
        CreateLoanPagesRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        CoreCommonModule,
        FormWizardModule,
        NgSelectModule,
        Ng2FlatpickrModule,
    ],
})
export class LoanPagesModule {}