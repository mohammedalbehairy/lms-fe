import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessDocumentPassportPageComponent } from './components/business-document-passport/business-document-passport-page.component';
import { PersonalDetailsAddressPageComponent } from './components/personal-details-address/personal-details-address-page.component';
import { PersonalDetailsHomeAddressPageComponent } from './components/personal-details-home-address/personal-details-home-address-page.component';
import { PersonalDetailsIdentifcationPageComponent } from './components/personal-details-identifcation/personal-details-identifcation-page.component';
import { PersonalInfoConfirmPageComponent } from './components/personal-info-confirm/personal-info-confirm-page.component';
import { ShareholderInformationPageComponent } from './components/shareholder-information/shareholder-information-page.component';

const routes: Routes = [
  {
    path: 'personalinfo',
    component: PersonalInfoConfirmPageComponent,
  },
  {
    path: 'Identifcation',
    component: PersonalDetailsIdentifcationPageComponent
  },
  {
    path: 'contactdetails',
    component: PersonalDetailsAddressPageComponent
  },
  {
    path: 'homeaddress',
    component: PersonalDetailsHomeAddressPageComponent
  },
  {
    path: 'uploaddocuments',
    component: BusinessDocumentPassportPageComponent
  },
  {
    path: 'addshareholder',
    component: ShareholderInformationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KycRoutingModule {}
