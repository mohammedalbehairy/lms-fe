import { Component, Input, OnInit } from "@angular/core";
import { UntypedFormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { CoreConfigService } from "@core/services/config.service";


@Component({
  selector: 'app-verify-page',
  templateUrl: './verify-page.component.html',
  styleUrls: ['./verify-page.component.scss'],
})

export class VerifyPageComponent implements OnInit {


  public loginForm: UntypedFormGroup;
  public submitted = false;
  public passwordTextType: boolean;
  public loading = false;



  constructor(
    private _router: Router,
    private _coreConfigService: CoreConfigService,

  ) {
    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true,
        },
        menu: {
          hidden: true,
        },
        footer: {
          hidden: true,
        },
        customizer: false,
        enableLocalStorage: false,
      },
    };
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