import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TempLoanRoutingModule } from './temp-loan-routing.module';
import { LoansComponent } from './loans/loans.component';
import { RepaymentScheduleComponent } from './repayment-schedule/repayment-schedule.component';
import { CoreCommonModule } from '@core/common.module';
import { CoreDirectivesModule } from '@core/directives/directives';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { CorePipesModule } from '@core/pipes/pipes.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { CoreSidebarModule } from '@core/components';
import { TabsModule } from 'app/main/components/tabs/tabs.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoanListService } from './services/loan-list.service';
import { LoanScheduleService } from './services/loan-schedule.service';
import { InitialApprovalComponent } from './initial-approval/initial-approval.component';
import { LoanFinalComponent } from './loan-final/loan-final.component';

@NgModule({
  declarations: [LoansComponent, RepaymentScheduleComponent, InitialApprovalComponent, LoanFinalComponent],
  imports: [
    CommonModule,
    TempLoanRoutingModule,
    CoreCommonModule,
    CoreDirectivesModule,
    Ng2FlatpickrModule,
    NgxDatatableModule,
    FormsModule,
    CorePipesModule,
    NgbModule,
    NgSelectModule,
    CoreSidebarModule,
    TabsModule,
    ContentHeaderModule,
    CardSnippetModule,
    CsvModule,
  ],
  providers: [LoanListService, LoanScheduleService],
})
export class TempLoanModule {}
