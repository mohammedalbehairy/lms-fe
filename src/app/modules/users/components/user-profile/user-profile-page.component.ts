import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Stepper from "bs-stepper";


@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss'],
})

export class UserProfilePageComponent implements OnInit {


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