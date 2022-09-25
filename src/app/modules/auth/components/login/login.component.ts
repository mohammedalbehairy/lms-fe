import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreConfigService } from '@core/services/config.service';
import { AuthenticationService } from 'app/auth/service';
import { Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { AuthService } from '../../service/auth.service';
import { VerificationService } from '../../service/verification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //  Public
  public coreConfig: any;
  public loginForm: UntypedFormGroup;
  public verificationForm: UntypedFormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public error = '';
  public verificationError = '';

  public loadingUaePass = false;

  public nextStep = false;
  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  constructor(
    private _coreConfigService: CoreConfigService,
    private _formBuilder: UntypedFormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private _authService: AuthService,
    private _verificationService: VerificationService
  ) {
    // redirect to home if already logged in
    // if (this._authenticationService.currentUserValue) {
    //   this._router.navigate(['/']);
    // }

    this._unsubscribeAll = new Subject();

    // Configure the layout
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

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  get v() {
    return this.verificationForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.nextStep = true;

    this.sendOtp(); //TODO:activate it again
    return;
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.initForms();

    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';

    // Subscribe to config changes
    this._coreConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.coreConfig = config;
      });
  }

  initForms() {
    this.loginForm = this._formBuilder.group({
      mobile: ['', [Validators.required]],
    });

    this.verificationForm = this._formBuilder.group({
      input1: ['', [Validators.required]],
      input2: ['', [Validators.required]],
      input3: ['', [Validators.required]],
      input4: ['', [Validators.required]],
      input5: ['', [Validators.required]],
      input6: ['', [Validators.required]],
    });
  }
  /**
   * Login With UAE Pass
   */
  loginUAE_Pass() {
    this.loadingUaePass = true;
    window.location.href = `https://stg-id.uaepass.ae/idshub/authorize?redirect_uri=${environment.currentUrl}/auth/sign-in-uae-pass&client_id=sandbox_stage&response_type=code&state=ShNP22hyl1jUU2RGjTRkpg==&scope=urn:uae:digitalid:profile:general&acr_values=urn:safelayer:tws:policies:authentication:level:low&ui_locales=en`;
  }

  sendOtp() {
    this._verificationService.sendOtp(this.f.mobile.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  login() {
    this._authService
      .login(this.f.mobile.value, 'MOBILE', this.inputsValues)
      .subscribe(
        (response: any) => {
          this._authenticationService.login_temp(response);
          this._router.navigate(['/apps/email/inbox']); //TODO:chnage it to the home page
        },
        (error) => {
          if (error == 'invalid OTP ') {
            this.verificationError =
              'We can’t verify your verififcation code, please try again.';
            // TODO: redirect to login
          } else {
            this.verificationError = error;
          }
        }
      );
  }

  verifyLogin() {
    if (this.verificationForm.invalid) {
      return;
    }

    this.login();
  }

  get inputsValues() {
    return `${this.v.input1.value}${this.v.input2.value}${this.v.input3.value}${this.v.input4.value}${this.v.input5.value}${this.v.input6.value}`;
  }
  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
