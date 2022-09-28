import { cloneDeep } from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { GlobalConfig, ToastrService } from 'ngx-toastr';
import { CustomToastrComponent } from 'app/main/extensions/toastr/custom-toastr/custom-toastr.component';
import { MagnatiAuthenticationService } from '../../services/magnati-authentication.service';

@Component({
  selector: 'app-data-provider-redirection',
  templateUrl: './data-provider-redirection.component.html',
  styleUrls: ['./data-provider-redirection.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DataProviderRedirectionComponent implements OnInit {
  merchantId;
  Token;
  lnddoCustomerId;

  // private
  private toastRef: any;
  private options: GlobalConfig;

  @BlockUI() blockUI: NgBlockUI;

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private toastr: ToastrService,
    private _magnatiAuthenticationService: MagnatiAuthenticationService
  ) {
    this.options = this.toastr.toastrConfig;
  }

  ngOnInit(): void {
    console.log('Called Constructor');
    this.route.queryParams.subscribe((params) => {
      this.merchantId = params['merchantId'];
      this.Token = params['Token'];
      this.lnddoCustomerId = params['lnddoCustomerId'];
    });
    this.authMagnati();
  }

  authMagnati() {
    this.blockUI.start('Loading...'); // Start blocking
    this._magnatiAuthenticationService.authMagnati(this.Token).subscribe(
      (res) => {
        console.log(res);
        this.blockUI.stop(); // Stop blocking
        this.toastrCustomSuccess();
        this._router.navigate(['/partners/initial-approve']);
      },
      (err) => {
        console.log('-==--=-=-=-=', err);
        this.toastrCustomDanger(err);
        this.blockUI.stop(); // Stop blocking
        this._router.navigate(['/partners/revenue']);
      }
    );
  }

  // Custom Success
  toastrCustomSuccess() {
    const customToastrRef = cloneDeep(this.options);
    customToastrRef.toastComponent = CustomToastrComponent;
    customToastrRef.closeButton = true;
    customToastrRef.tapToDismiss = false;
    customToastrRef.progressBar = true;
    customToastrRef.toastClass = 'toast ngx-toastr';
    this.toastr.success(
      'Successfully connected to your data provider!',
      'Success!',
      customToastrRef
    );
  }

  // Custom Danger
  toastrCustomDanger(error: any) {
    const customToastrRef = cloneDeep(this.options);
    customToastrRef.toastComponent = CustomToastrComponent;
    customToastrRef.closeButton = true;
    customToastrRef.tapToDismiss = false;
    customToastrRef.progressBar = true;
    customToastrRef.toastClass = 'toast ngx-toastr';
    this.toastr.error(error, 'Error!', customToastrRef);
  }
}
