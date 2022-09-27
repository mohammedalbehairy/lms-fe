import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { StepperPageComponent } from "./stepper-page.component";

@NgModule({
    declarations: [
        StepperPageComponent
    ],
    imports:[CommonModule, NgbModule],
    exports: [StepperPageComponent]
})
export class stepperModule {}