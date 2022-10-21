import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment';
import { LoansService } from '../services/loans.service';

@Component({
  selector: 'app-initial-approval',
  templateUrl: './initial-approval.component.html',
  styleUrls: ['./initial-approval.component.scss'],
})
export class InitialApprovalComponent implements OnInit {
  type;
  public dayName;
  public dayNum;

  public submitted = false;
  public loading = false;

  constructor(private _router: Router, private _loansService: LoansService) {}
  ngOnInit(): void {
    // let num = moment(new Date()).day();
    let date = moment();
    this.dayName = date.toString().substring(0, 3);
    this.dayNum = date.toString().substring(8, 10);
  }

  submit() {
    this.submitted = true;
    this.loading = true;
    this._loansService.applyLoan(7).subscribe(
      (res) => {
        this._router.navigate(['loans/final']);
        this.loading = false;
      },
      (err) => {
        this.loading = false;
        console.log('========', err);
      }
    );
  }
}
