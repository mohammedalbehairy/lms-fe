import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FlatpickrOptions } from "ng2-flatpickr";


@Component({
  selector: 'app-business-document-upload-page',
  templateUrl: './business-document-upload-page.component.html',
  styleUrls: ['./business-document-upload-page.component.scss'],
})

export class BusinessDocumentUploadPageComponent implements OnInit {

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


  public basicDateOptions: FlatpickrOptions = {
    altInput: true
  };

  public birthDateOptions: FlatpickrOptions = {
    altInput: true
  };
  constructor(
    private _router: Router,
    private modalService: NgbModal,

  ) {

  }
  ngOnInit(): void {
  }


  back() {
    this._router.navigate(['kyb/otherinfo2']);
  }
  next() {
    this._router.navigate(['kyc/personalinfo']);
  }

  modalOpenDefault(modalDefault) {
    this.modalService.open(modalDefault, {
      centered: true,
      size: 'lg'
    });
  }
}