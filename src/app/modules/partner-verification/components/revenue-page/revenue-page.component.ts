import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedDataService } from '@core/services/shared-data.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-revenue-page',
  templateUrl: './revenue-page.component.html',
  styleUrls: ['./revenue-page.component.scss'],
})
export class RevenuePageComponent implements OnInit {
  selectedPartner = undefined;
  lnddocustomerid;
  public loginForm: UntypedFormGroup;

  constructor(
    private _router: Router,
    private _sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    this.lnddocustomerid = this.getCustomerId();
  }

  getCustomerId() {
    return JSON.parse(localStorage.getItem('currentUser')).id || null;
  }

  back() {
    this._router.navigate(['/auth/home/consent']);
  }

  next() {
    this.setSelectedPartner();

    switch (this.selectedPartner) {
      case 'telr':
        this.navigateTelr();
        break;
      case 'magnati':
        this.navigateMagnati();
        break;
      case 'amazon':
        //TODO: add amazon logic
        break;
      default:
        break;
    }
    // this._router.navigate(['partners/revenuelogin']);
  }

  setSelectedPartner() {
    console.log('=====setSelectedPartner=====');

    this._sharedDataService.partner = this.selectedPartner;
  }

  navigateTelr() {
    console.log('=====navigateTelr=====');

    this._router.navigate(['/partners/telr-login']);
  }

  navigateMagnati() {
    console.log('=====navigateMagnati=====');

    window.location.href = `https://safexpayuat.bankfab.com/agmerchant/lnndoFabIndex.jsp?apiKey=123123&lnddocustomerid=${this.lnddocustomerid}&redirectUrl=${environment.currentUrl}/partners/data-provider-redirection`;
  }
}
