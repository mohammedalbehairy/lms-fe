import { Component, Input, OnInit } from "@angular/core";
import { UntypedFormGroup } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})

export class RegisterPageComponent implements OnInit {


  public loginForm: UntypedFormGroup;
  public submitted = false;
  public passwordTextType: boolean;
  public loading = false;



  constructor(
    private _router: Router,

  ) {

  }
  ngOnInit(): void {
  }


  get f() {
    return this.loginForm.controls;
  }

  openDocumentsPage() {
    this._router.navigate(['dash/documents']);
  }
}