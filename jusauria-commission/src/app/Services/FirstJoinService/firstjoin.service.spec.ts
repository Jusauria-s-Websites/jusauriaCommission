import { TestBed } from '@angular/core/testing';

import { FirstjoinService } from './firstjoin.service';

describe('FirstjoinService', () => {
  let service: FirstjoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstjoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
