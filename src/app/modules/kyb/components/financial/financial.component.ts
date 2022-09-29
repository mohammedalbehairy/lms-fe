import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { KybService } from '../../services/kyb.service';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FinancialComponent implements OnInit {
  public businessFinancialForm: UntypedFormGroup;
  public submitted = false;
  public loading = false;

  constructor(
    private _router: Router,
    private formBuilder: UntypedFormBuilder,
    private _kybService: KybService
  ) {}
  ngOnInit(): void {
    this.initForm();

    this.loadData();
  }

  initForm() {
    // Reactive form initialization
    this.businessFinancialForm = this.formBuilder.group({
      turnoverYears: [null, Validators.required],
      creditAmount: [null, Validators.required],
      totalCapital: [null, Validators.required],
      outstandingAmount: ['', Validators.required],
      loanReason: ['', Validators.required],
      currentPaymentCycle: [null, Validators.required],
      outstandingLoans: ['no', Validators.required],
    });
  }

  loadData() {}

  onSubmit() {
    console.log('=-=-=-=-=-=-=--', this.businessFinancialForm);

    this.submitted = true;

    // stop here if form is invalid
    if (this.businessFinancialForm.invalid) {
      return;
    }
    this.loading = true;
    let data = this.getCleanValue();

    this._kybService.setData(data).subscribe(
      (res) => {
        console.log(res);

        this._router.navigate(['kyb/otherinfo']);
      },
      (err) => {
        this.loading = false;
        console.log(err);
      }
    );
  }

  getCleanValue() {
    return {
      financialInformation: {
        ...this.businessFinancialForm.value,
      },
    };
  }

  get f() {
    return this.businessFinancialForm.controls;
  }

  back() {
    this._router.navigate(['kyb/businessaddress']);
  }
}
