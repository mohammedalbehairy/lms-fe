import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: 'app-uploaded-documents-page',
  templateUrl: './uploaded-documents-page.component.html',
  styleUrls: ['./uploaded-documents-page.component.scss'],
})

export class UploadedDocumentsPageComponent implements OnInit {

  constructor(
    private _router: Router,

  ) {

  }
  ngOnInit(): void {
  }

  openDocumentsPage() {
    this._router.navigate(['dash/documents']);
  }
}