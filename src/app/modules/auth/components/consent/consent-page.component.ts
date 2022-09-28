import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CoreConfigService } from '@core/services/config.service';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { AuthRouteService } from '../../service/auth.route.service';

@Component({
  selector: 'app-consent-page',
  templateUrl: './consent-page.component.html',
  styleUrls: ['./consent-page.component.scss'],
})
export class ConsentPageComponent implements OnInit {
  @ViewChild(NgbCarousel) carousel: NgbCarousel;
  flag = true;
  public loading = false;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _router: Router,
    private _coreConfigService: CoreConfigService,
    private _authrouteService: AuthRouteService
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

  nextFinal() {
    //TODO:add approve login final screen
    this._router.navigate(['/partners/revenue']);
  }
}
