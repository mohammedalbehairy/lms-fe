import { Inject, Injectable, InjectionToken } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import * as _ from 'lodash';

// Injection token for the core custom settings
export const CORE_CUSTOM_CONFIG = new InjectionToken('coreCustomConfig');

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  // Private
  public registerData: any = undefined;

  private _configSubject: BehaviorSubject<any>;
}
