import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedDataService } from '@core/services/shared-data.service';
import { TelrAuthenticationService } from '../../services/telr-authentication.service';

@Component({
  selector: 'app-telr-login',
  templateUrl: './telr-login.component.html',
  styleUrls: ['./telr-login.component.scss'],
})
export class TelrLoginComponent implements OnInit {
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
    console.log('----selectedData-----', this.selectedData);

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
    console.log(this.loginForm);

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
          }

          this.sendSuccessToaster(
            '👋 Hi, !',
            'You successfully logged to you provider account'
          );
          this._router.navigate(['/partners/initial-approve']);
        },
        (err) => {
          this.error = err.status;
          this.loading = false;
          console.log(err);
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
  // next() {
  //   this._router.navigate(['partners/initial-approve']);
  // }
}
