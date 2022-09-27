import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessDetailsAddressPageComponent } from './components/business-details-address/business-details-address-page.component';
import { BusinessDetailsFinancialPageComponent } from './components/business-details-financial/business-details-financial-page.component';
import { BusinessDetailsInfoPageComponent } from './components/business-details-info/business-details-info-page.component';
import { BusinessDetailsOtherPageComponent } from './components/business-details-other/business-details-other-page.component';
import { BusinessDetailsOther2PageComponent } from './components/business-details-other2/business-details-other2-page.component';
import { BusinessDocumentUploadPageComponent } from './components/business-document-upload/business-document-upload-page.component';

const routes: Routes = [
  {
    path: 'businessdetails',
    component: BusinessDetailsInfoPageComponent,
  },
  {
    path: 'businessaddress',
    component: BusinessDetailsAddressPageComponent
  },
  {
    path: 'financialinfo',
    component: BusinessDetailsFinancialPageComponent
  },
  {
    path: 'otherinfo',
    component: BusinessDetailsOtherPageComponent
  },
  {
    path: 'otherinfo2',
    component: BusinessDetailsOther2PageComponent
  },
  {
    path: 'uploaddocs',
    component: BusinessDocumentUploadPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KypRoutingModule {}
