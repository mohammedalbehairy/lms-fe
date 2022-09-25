import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxMaskModule } from "ngx-mask";
import { UploadDocumentsPageComponent } from "./components/upload-documents/upload-documents-page.component";
import { UploadedDocumentsPageComponent } from "./components/uploaded-documents/uploaded-documents-page.component";
import { UploadDocumentsRoutingModule } from "./documents-pages-routing.module";

@NgModule({
    declarations: [
        UploadDocumentsPageComponent,
        UploadedDocumentsPageComponent
    ],
    imports: [
        CommonModule,
        UploadDocumentsRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        CoreCommonModule,
        NgxMaskModule.forRoot()
    ],
})
export class DocumentsPagesModule {}