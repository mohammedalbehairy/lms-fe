import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CoreConfigService } from '@core/services/config.service';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { AuthRouteService } from '../../service/auth.route.service';
import { ConsentService } from '../../service/consent.service';

@Component({
  selector: 'app-consent-page',
  templateUrl: './consent-page.component.html',
  styleUrls: ['./consent-page.component.scss'],
})
export class ConsentPageComponent implements OnInit {
  @ViewChild(NgbCarousel) carousel: NgbCarousel;

  public loading = false;

  public step1Approve = false;
  public step2Approve = false;

  public aecbApprove = false;

  public toggleView = false;
  public typeSelection = '';
  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _router: Router,
    private _coreConfigService: CoreConfigService,
    private _authrouteService: AuthRouteService,
    private _consentService: ConsentService
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
    this._authrouteService.passValue('Consent');
  }

  next() {
    this.carousel.next();
  }

  back() {
    this.carousel.prev();
  }

  openDocumentsPage() {
    this._router.navigate(['dash/documents']);
  }

  startApp() {
    this._consentService
      .setConsent({
        accepted: true,
        role: this.typeSelection,
      })
      .subscribe(
        (res) => {
          this._router.navigate(['/partners/revenue']);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
