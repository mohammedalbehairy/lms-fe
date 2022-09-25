import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NgbCarousel } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-consent-page',
  templateUrl: './consent-page.component.html',
  styleUrls: ['./consent-page.component.scss'],
})

export class ConsentPageComponent implements OnInit {

  @ViewChild(NgbCarousel) carousel: NgbCarousel;


  constructor(
    private _router: Router,

  ) {

  }
  ngOnInit(): void {    
  }
  next(){
    this.carousel.next();
  }

  openDocumentsPage() {
    this._router.navigate(['dash/documents']);
  }
}