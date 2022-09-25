import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: 'app-upload-documents-page',
  templateUrl: './upload-documents-page.component.html',
  styleUrls: ['./upload-documents-page.component.scss'],
})

export class UploadDocumentsPageComponent implements OnInit {


  public TDNameVar;
  public TDEmailVar;
  public selectBasicLoading = false;
  basicDPdata;
  public data: any;

  public selectBasic = [
    { name: 'UK' },
    { name: 'USA' },
    { name: 'Spain' },
    { name: 'France' },
    { name: 'Italy' },
    { name: 'Australia' }
  ];



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