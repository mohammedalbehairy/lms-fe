import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperPageComponent } from './components/stepper/stepper-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [StepperPageComponent],
  imports: [CommonModule, NgbModule],
  exports: [StepperPageComponent],
})
export class SharedModule {}
