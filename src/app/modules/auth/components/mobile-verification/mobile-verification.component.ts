import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreConfigService } from '@core/services/config.service';
import { SharedDataService } from '@core/services/shared-data.service';
import { AuthenticationService } from 'app/auth/service';
import { GlobalConfig, ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';
import { AuthRouteService } from '../../service/auth.route.service';
import { AuthService } from '../../service/auth.service';
import { VerificationService } from '../../service/verification.service';

@Component({
  selector: 'app-mobile-verification',
  templateUrl: './mobile-verification.component.html',
  styleUrls: ['./mobile-verification.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MobileVerificationComponent implements OnInit {
  //  Public
  public coreConfig: any;
  public verificationForm: UntypedFormGroup;
  public mobileForm: UntypedFormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public error = '';
  public verificationError = '';
  public savedData = undefined;
  public passwordTextType: boolean;

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
    private _sharedDataService: SharedDataService,
    private _verificationService: VerificationService,
    private _toastrService: ToastrService,
    private _authrouteService: AuthRouteService
  ) {
    // redirect to home if already logged in
    if (this._authenticationService.currentUserValue) {
      this._router.navigate(['/']);
    }

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

    this._authrouteService.passValue('Verify');
  }

  /**
   * On init
   */
  ngOnInit(): void {
    this.checkRegData();
    this.getSavedData();
    this.initForms();

    this.sendOtp();

    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';

    // Subscribe to config changes
    this._coreConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.coreConfig = config;
      });
  }

  register() {
    this.loading = true;
    this._authService
      .register(
        this.savedData.name,
        this.m.mobile.value,
        'MOBILE',
        this.inputsValues
      )
      .subscribe(
        (response: any) => {
          let res = {
            user: response.kycDetail,
            provider: response.kycProvider,
            token: response.sss,
          };
          this._authenticationService.login_temp(res);
          this.loading = false;
          this._router.navigate(['/apps/email/inbox']); //TODO:chnage it to the home page
        },
        (error) => {
          if (error == 'Token supplied is invalid ') {
            this.verificationError =
              'We can’t verify your verififcation code, please try again.';
            // TODO: redirect to login
          } else {
            this.verificationError = error;
          }
          this.loading = false;
        }
      );
  }

  verify() {
    if (this.mobileForm.invalid) {
      return;
    }

    if (this.verificationForm.invalid) {
      return;
    }
    this.register();
  }

  initForms() {
    this.mobileForm = this._formBuilder.group({
      mobile: [this.savedData.mobile, [Validators.required]],
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

  // convenience getter for easy access to form fields
  get m() {
    return this.mobileForm.controls;
  }

  get v() {
    return this.verificationForm.controls;
  }

  get inputsValues() {
    return `${this.v.input1.value}${this.v.input2.value}${this.v.input3.value}${this.v.input4.value}${this.v.input5.value}${this.v.input6.value}`;
  }
  //#region  -----------  helpers  ----------

  checkRegData() {
    console.log(
      '=====checkRegData======',
      this._sharedDataService.registerData
    );

    let hasMobile =
      this._sharedDataService.registerData.hasOwnProperty('mobile');
    if (!hasMobile) this._router.navigate(['/auth/home/register']);
  }

  getSavedData() {
    this.savedData = this._sharedDataService.registerData;
  }

  verifyForms() {
    if (this.verificationForm.invalid || this.mobileForm.invalid) {
      return;
    }
  }

  sendOtp() {
    if (this.savedData.mobile)
      this._verificationService.sendOtp(this.m.mobile.value).subscribe(
        (res) => {
          this.sendSuccessToaster(
            '👋 Hi, ' + this.savedData.name + '!',
            'OTP Sent successfully'
          );
          console.log(res);
        },
        (err) => {
          this.sendErrorToaster(
            '👋 Sorry, ' + this.savedData.name + '!',
            "We got an error, OTP wasn't sent successfully"
          );
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

  sendErrorToaster(title: string, msg: string) {
    this._toastrService.error(msg, title, {
      toastClass: 'toast ngx-toastr',
      closeButton: true,
    });
  }
  //#endregion  -----------  helpers  ----------

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
