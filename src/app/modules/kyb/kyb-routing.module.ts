import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './components/address/address.component';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import { ECommerceComponent } from './components/e-commerce/e-commerce.component';
import { FinancialComponent } from './components/financial/financial.component';
import { InfoComponent } from './components/info/info.component';
import { OtherInfoComponent } from './components/other-info/other-info.component';

const routes: Routes = [
  {
    path: 'businessdetails',
    component: InfoComponent,
  },
  {
    path: 'businessaddress',
    component: AddressComponent,
  },
  {
    path: 'financialinfo',
    component: FinancialComponent,
  },
  {
    path: 'otherinfo',
    component: OtherInfoComponent,
  },
  {
    path: 'ecommerce',
    component: ECommerceComponent,
  },
  {
    path: 'uploaddocs',
    component: DocumentUploadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KybRoutingModule {}
