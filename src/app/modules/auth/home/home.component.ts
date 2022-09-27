import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreConfigService } from '@core/services/config.service';
import { AuthRouteService } from '../service/auth.route.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
    { name: 'Australia' },
  ];

  public loginForm: UntypedFormGroup;
  public submitted = false;
  public passwordTextType: boolean;
  public loading = false;

  currentPage = 'Login';

  constructor(
    private _router: Router,
    private _coreConfigService: CoreConfigService,
    private _authrouteService: AuthRouteService
  ) {}
  ngOnInit(): void {
    this._authrouteService.currentPage.subscribe((data) => {
      console.log(data);
      this.currentPage = data;
    });

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

  get f() {
    return this.loginForm.controls;
  }
  /**
   * Toggle password
   */
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  openDocumentsPage() {
    this._router.navigate(['dash/documents']);
  }

  navigateTo() {
    switch (this.currentPage) {
      case 'Verify':
        this._router.navigate(['/auth/home/register']);
        break;
      case 'Consent':
        this._router.navigate(['/auth/home/login']);
        break;
      case 'Login':
        break;
      default:
        break;
    }
  }
}
