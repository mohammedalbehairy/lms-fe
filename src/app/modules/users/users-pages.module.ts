import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxMaskModule } from "ngx-mask";
import { UserProfilePageComponent } from "./components/user-profile/user-profile-page.component";
import { UsersPagesRoutingModule } from "./users-pages-routing.module";

@NgModule({
    declarations: [
        UserProfilePageComponent
    ],
    imports: [
        CommonModule,
        UsersPagesRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        CoreCommonModule,
        NgxMaskModule.forRoot()
    ],
})
export class UserPagesModule {}