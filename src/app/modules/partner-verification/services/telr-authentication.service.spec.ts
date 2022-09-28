import { TestBed } from '@angular/core/testing';

import { TelrAuthenticationService } from './telr-authentication.service';

describe('TelrAuthenticationService', () => {
  let service: TelrAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelrAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
