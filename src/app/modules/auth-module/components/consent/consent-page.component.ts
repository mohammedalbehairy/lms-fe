import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NgbCarousel } from "@ng-bootstrap/ng-bootstrap";
import { AuthRouteService } from "../../services/auth.route.service";


@Component({
  selector: 'app-consent-page',
  templateUrl: './consent-page.component.html',
  styleUrls: ['./consent-page.component.scss'],
})

export class ConsentPageComponent implements OnInit {

  @ViewChild(NgbCarousel) carousel: NgbCarousel;
  flag = true;

  constructor(
    private _router: Router,
    private _authrouteService : AuthRouteService,

  ) {

  }
  ngOnInit(): void {    
    this._authrouteService.passValue("Consent");
  }
  next(){
    this.carousel.next();
  }

  openDocumentsPage() {
    this._router.navigate(['dash/documents']);
  }
}