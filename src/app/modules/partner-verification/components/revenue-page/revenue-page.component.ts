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

  constructor(
    private _router: Router,
    private _sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {}

  back() {
    this._router.navigate(['/auth/home/consent']);
  }

  next() {
    this.setSelectedPartner();
    this.navigateProvider();
  }

  setSelectedPartner() {
    this._sharedDataService.partner = this.selectedPartner;
  }

  navigateProvider() {
    this._router.navigate(['/partners/provider-login']);
  }
}
