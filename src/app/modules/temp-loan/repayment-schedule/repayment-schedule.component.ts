import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { RepaymentScheduleService } from '../services/repayment-schedule.service';

@Component({
  selector: 'app-repayment-schedule',
  templateUrl: './repayment-schedule.component.html',
  styleUrls: ['./repayment-schedule.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RepaymentScheduleComponent implements OnInit {
  // public
  public data: any;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;

  // decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;

  // private
  private tempData = [];

  public rows;
  public id;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {CalendarService} _calendarService
   * @param {LoanListService} _loanListService
   */
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _repaymentScheduleService: RepaymentScheduleService
  ) {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    if (!this.id) {
      this._router.navigate([`/loans`]);
    }
    this.loadRS(this.id);
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  loadRS(id) {
    this._repaymentScheduleService.getRepaymentSchedule(id).subscribe(
      (res: any) => {
        this.data = res.periods;
        this.rows = this.data;
        this.tempData = this.rows;
      },
      (err) => {
        console.log('=========err=========');
      }
    );
  }

  sum(cells: number[]): number {
    const filteredCells = cells.filter((cell) => !!cell);
    return Math.floor(filteredCells.reduce((sum, cell) => (sum += cell), 0));
  }
}
