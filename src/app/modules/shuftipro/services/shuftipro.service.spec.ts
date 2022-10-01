import { TestBed } from '@angular/core/testing';

import { ShuftiproService } from './shuftipro.service';

describe('ShuftiproService', () => {
  let service: ShuftiproService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShuftiproService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
