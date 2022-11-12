import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoansService } from '../services/loans.service';

@Component({
  selector: 'app-loan-terms-page',
  templateUrl: './loan-terms-page.component.html',
  styleUrls: ['./loan-terms-page.component.scss'],
})
export class LoanTermsPageComponent implements OnInit {
  public submitted = false;
  public loading = false;

  constructor(private _router: Router, private _loansService: LoansService) {}

  ngOnInit(): void {}

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

  back() {
   //TODO: add navigation back
  }
}
