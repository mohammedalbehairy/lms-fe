import { TestBed } from '@angular/core/testing';

import { MagnatiAuthenticationService } from './magnati-authentication.service';

describe('MagnatiAuthenticationService', () => {
  let service: MagnatiAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagnatiAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
