import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreConfigService } from '@core/services/config.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { UaePassToken } from '../../interfaces/uae-pass-token';
import { AuthUaePassService } from '../../service/auth-uae-pass.service';
import { AuthenticationService } from 'app/auth/service';

@Component({
  selector: 'app-sign-up-uae-pass',
  templateUrl: './sign-up-uae-pass.component.html',
  styleUrls: ['./sign-up-uae-pass.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignUpUaePassComponent implements OnInit {
  //  Public
  public coreConfig: any;
  code: any;
  uaePassToken: UaePassToken = {
    access_token: '',
    expires_in: 0,
    scope: '',
    token_type: '',
  };

  uniqueId;

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

    // Subscribe to config changes
    this._coreConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.coreConfig = config;
      });
  }

  getToken() {
    const body = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', this.code)
      .set(
        'redirect_uri',
        `${environment.currentUrl}/auth/home/sign-up-uae-pass`
      )
      .set('client_id', 'sandbox_stage')
      .set('client_secret', 'sandbox_stage');

    return this._http
      .post(
        'https://hermes.lnddo.loan/api/unsecured/v1/registration/uae-pass',
        {
          code: this.code,
          redirectUri: `${environment.currentUrl}/auth/home/sign-up-uae-pass`,
        }
      )
      .subscribe(
        (res: any) => {
          this.uaePassToken = res;
          this.signUpHerms();
          // this.router.navigate(['/auth/home/sign-up-uae-pass']);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  signUpHerms() {
    this._http
      .post(`${environment.apiUrl}/api/v1/crm/kyc/registration`, {
        accessToken: this.uaePassToken.access_token,
        kycProvider: 'UAE_PASS',
      })
      .subscribe(
        (response: any) => {
          this.loginUAE_Pass();
        },
        (error) => {
          if (
            error.globalisationMessageCode ===
            'error.msg.client.duplicate.externalId'
          ) {
            //TODO: redirect to login
          }
          console.log(error);
        }
      );
  }

  loginUAE_Pass() {
    this._authUaePassService
      .loginUAE_Pass(this.uaePassToken.access_token)
      .subscribe(
        (response: any) => {
          this._authenticationService.login_temp(response);
          this._router.navigate(['/dashboard/analytics']);
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
