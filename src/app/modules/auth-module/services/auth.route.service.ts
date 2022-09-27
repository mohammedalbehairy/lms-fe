import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class AuthRouteService {

  public currentPage = new Subject<any>();

  passValue(data) {
    //passing the data as the next observable
    this.currentPage.next(data);
  }

}