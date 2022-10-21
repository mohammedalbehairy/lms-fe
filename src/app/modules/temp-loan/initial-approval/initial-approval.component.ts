import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment';

@Component({
  selector: 'app-initial-approval',
  templateUrl: './initial-approval.component.html',
  styleUrls: ['./initial-approval.component.scss'],
})
export class InitialApprovalComponent implements OnInit {
  type;
  public dayName;
  public dayNum;

  constructor(private _router: Router) {}
  ngOnInit(): void {
    // let num = moment(new Date()).day();
    let date = moment();
    this.dayName = date.toString().substring(0, 3);
    this.dayNum = date.toString().substring(8, 10);
  }
 
  next() {
    this._router.navigate(['loans/final']);
  }
}
