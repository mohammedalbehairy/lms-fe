import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedDataService } from '@core/services/shared-data.service';
import { TelrAuthenticationService } from '../../services/telr-authentication.service';
import { MagnatiAuthenticationService } from '../../services/magnati-authentication.service';


@Component({
  selector: 'app-provider-login',
  templateUrl: './provider-login.component.html',
  styleUrls: ['./provider-login.component.scss']
})
export class ProviderLoginComponent implements OnInit {

  type;
  public basicPwdShow = false;

  selectedData = undefined;
  lnddocustomerid;
  public loginForm: UntypedFormGroup;

  public loading = false;
  public submitted = false;
  public passwordTextType: boolean;
  public error = '';

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private telrAuthenticationService: TelrAuthenticationService,
    private magnatiAuthenticationService: MagnatiAuthenticationService,
    private _sharedDataService: SharedDataService,
    private _toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getSelectedData();
    this.initForms();
  }

  initForms() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  getSelectedData() {
    this.selectedData = this._sharedDataService.partner;
    if (!this.selectedData) this._router.navigate(['/partners/revenue']);
  }

  /**
   * Toggle password
   */
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;
    this.error = '';
    // stop here if form is invalid

    if (this.loginForm.invalid) {
      return;
    }

    // Login
    this.authTelr();
  }

  authTelr() {
    this.loading = true;
    this.telrAuthenticationService
      .authTelr(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (res: any) => {
          this.loading = false;

          if (res.code == 500 || res.code == 400) {
            this.error = res.status;
          } else {
            this.sendSuccessToaster(
              '👋 Hi, !',
              'You successfully logged to you provider account'
            );
            this._router.navigate(['/partners/initial-approve']);
          }
        },
        (err) => {
          this.error = 'Invalid or incorrect Partner account credential';
          this.loading = false;
          console.log(err);
        }
      );
  }

  authMagnati() {
    this.loading = true;
    this.magnatiAuthenticationService
      .authMagnati(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (res: any) => {
          this.loading = false;

          if (res.code == 500 || res.code == 400) {
            this.error = res.status;
          } else {
            this.sendSuccessToaster(
              '👋 Hi, !',
              'You successfully logged to you provider account'
            );
            this._router.navigate(['/partners/initial-approve']);
          }
        },
        (err) => {
          this.error = 'Invalid or incorrect Partner account credential';
          this.loading = false;
        }
      );
  }

  sendSuccessToaster(title: string, msg: string) {
    this._toastrService.success(msg, title, {
      toastClass: 'toast ngx-toastr',
      closeButton: true,
    });
  }

  back() {
    this._router.navigate(['partners/revenue']);
  }
}
