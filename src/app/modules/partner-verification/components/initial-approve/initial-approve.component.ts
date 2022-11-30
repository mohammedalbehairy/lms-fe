import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment';

@Component({
  selector: 'app-initial-approve',
  templateUrl: './initial-approve.component.html',
  styleUrls: ['./initial-approve.component.scss'],
})
export class InitialApproveComponent implements OnInit {
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



  back() {
    this._router.navigate(['partners/initial-approve']);
  }
  next() {
    this._router.navigate(['partners/documents']);
  }
}
