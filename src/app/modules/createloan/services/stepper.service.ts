import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class StepperService {

  public step = new Subject<any>();

  passValue(data) {
    //passing the data as the next observable
    this.step.next(data);
  }

}
