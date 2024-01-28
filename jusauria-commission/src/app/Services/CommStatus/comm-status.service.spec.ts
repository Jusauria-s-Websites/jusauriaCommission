import { TestBed } from '@angular/core/testing';

import { CommStatusService } from './comm-status.service';

describe('CommStatusService', () => {
  let service: CommStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
