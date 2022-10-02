import { first, takeUntil } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreConfigService } from '@core/services/config.service';
import { Subject } from 'rxjs';
import { UaePassToken } from '../../interfaces/uae-pass-token';
import { AuthUaePassService } from '../../service/auth-uae-pass.service';
import { AuthenticationService } from 'app/auth/service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-sign-in-uae-pass',
  templateUrl: './sign-in-uae-pass.component.html',
  styleUrls: ['./sign-in-uae-pass.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignInUaePassComponent implements OnInit {
  //  Public
  public coreConfig: any;
  code: any;
  uaePassToken: UaePassToken = {
    access_token: '',
    expires_in: 0,
    scope: '',
    token_type: '',
  };
  public returnUrl: string;
  userInfo;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {FormBuilder} _formBuilder
   */
  constructor(
    private _coreConfigService: CoreConfigService,
    private _route: ActivatedRoute,
    private _http: HttpClient,
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private _authUaePassService: AuthUaePassService
  ) {
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

  ngOnInit(): void {
    this._route.queryParamMap.subscribe((qs) => {
      this.code = qs.get('code');
      this.getToken();
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';

    // Subscribe to config changes
    this._coreConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.coreConfig = config;
      });
  }

  getToken() {
    // return this._authUaePassService.getTokenUAE_Pass(this.code).subscribe(
    return this._http
      .post(
        `${environment.currentUrl}/api/unsecured/v1/registration/uae-pass`,
        {
          code: this.code,
          redirectUri: `${environment.currentUrl}/auth/home/sign-in-uae-pass`,
        }
      )
      .subscribe(
        (res: any) => {
          this.uaePassToken = res;

          this.loginUAE_Pass();
        },
        (err) => {
          console.log(err);
        }
      );
  }

  loginUAE_Pass() {
    this._authUaePassService
      .loginUAE_Pass(this.uaePassToken.access_token)
      .subscribe(
        (response: any) => {
          this._authenticationService.login_temp(response);
          this._router.navigate(['/auth/home/consent']); //TODO:chnage it to the home page
        },
        (error) => {
          if (
            error.globalisationMessageCode ===
            'error.msg.client.duplicate.externalId'
          ) {
            // TODO: redirect to login
          }
          console.log(error);
        }
      );
  }
}
