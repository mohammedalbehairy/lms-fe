import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UploadDocumentsPageComponent } from "./components/upload-documents/upload-documents-page.component";
import { UploadedDocumentsPageComponent } from "./components/uploaded-documents/uploaded-documents-page.component";



const routes: Routes = [
    {
        path: "upload",
        component: UploadDocumentsPageComponent
    },
    {
        path: "view",
        component: UploadedDocumentsPageComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class UploadDocumentsRoutingModule {}
  