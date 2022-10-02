import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CoreConfigService } from '@core/services/config.service';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoanListService } from '../services/loan-list.service';
import { LoansService } from '../services/loans.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoansComponent implements OnInit {
  // public
  public data: any;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;

  // decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;

  // private
  private tempData = [];
  private _unsubscribeAll: Subject<any>;
  public rows;
  public tempFilterData;
  public previousStatusFilter = '';

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {CalendarService} _calendarService
   * @param {LoanListService} _loanListService
   */
  constructor(
    private _loanListService: LoanListService,
    private _coreConfigService: CoreConfigService
  ) {
    this._unsubscribeAll = new Subject();
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe config change
    this._coreConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        // If we have zoomIn route Transition then load datatable after 450ms(Transition will finish in 400ms)
        if (config.layout.animation === 'zoomIn') {
          setTimeout(() => {
            this._loanListService.onLoanListChanged
              .pipe(takeUntil(this._unsubscribeAll))
              .subscribe((response) => {
                this.data = response;
                this.rows = this.data;
                this.tempData = this.rows;
              });
          }, 450);
        } else {
          this._loanListService.onLoanListChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((response) => {
              console.log('======response========', response);

              this.data = response;
              this.rows = this.data;
              this.tempData = this.rows;
            });
        }
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
