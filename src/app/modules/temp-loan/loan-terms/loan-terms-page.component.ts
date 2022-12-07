import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { of } from 'rxjs';
import { LoansService } from '../services/loans.service';
import { RepaymentScheduleService } from '../services/repayment-schedule.service';
import { ScoringService } from '../services/scoring.service';

@Component({
  selector: 'app-loan-terms-page',
  templateUrl: './loan-terms-page.component.html',
  styleUrls: ['./loan-terms-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoanTermsPageComponent implements OnInit {
  public submitted = false;
  public loading = false;

  public data: any;
  public rows;
  private tempData = [];
  public ColumnMode = ColumnMode;
  public selectedOption = 10;

  public maxLoanAmount = 5000;
  public minTenure = 3;

  public amountConfig: object = {
    connect: 'lower',
    range: {
      min: 5000,
      max: 100000,
    },
    step: 1,
    tooltips: [true],
  };
  public tenureConfig: object = {
    connect: 'lower',
    range: {
      min: 3,
      max: 12,
    },
    step: 3,
    tooltips: [true],
    pips: {
      mode: 'steps',
      density: 36,
    },
  };

  constructor(
    private _router: Router,
    private _loansService: LoansService,
    private _repaymentScheduleService: RepaymentScheduleService,
    private _scoringService: ScoringService
  ) {}

  ngOnInit(): void {
    this.loadScoring();
  }

  loadScoring() {
    this._scoringService.loadScore().subscribe(
      (res: any) => {
        this.maxLoanAmount =
          Math.ceil(res.maxLoanAmount) < 100000
            ? Math.ceil(res.maxLoanAmount)
            : 100000;
        this.minTenure = res.minTenure;
        this.loadRS();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  submit() {
    this.submitted = true;
    this.loading = true;
    this._loansService
      .applyLoan({
        loanAmount: this.maxLoanAmount,
        loanTerm: this.minTenure * 30,
      })
      .subscribe(
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

  loadRS() {
    this._repaymentScheduleService
      .loadRepaymentSchedule({
        loanAmount: this.maxLoanAmount,
        loanTerm: this.minTenure * 30,
      })
      .subscribe(
        (res: any) => {
          this.data = res.periods;
          this.rows = this.data;
          this.tempData = this.rows;
          console.log('========res==========');
        },
        (err) => {
          console.log('=========err=========');
        }
      );
  }

  back() {
    //TODO: add navigation back
  }
}
