import { TestBed } from '@angular/core/testing';

import { KybService } from './kyb.service';

describe('KypService', () => {
  let service: KybService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KybService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
