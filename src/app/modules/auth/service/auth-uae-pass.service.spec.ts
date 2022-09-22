import { TestBed } from '@angular/core/testing';

import { AuthUaePassService } from './auth-uae-pass.service';

describe('AuthUaePassService', () => {
  let service: AuthUaePassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthUaePassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
