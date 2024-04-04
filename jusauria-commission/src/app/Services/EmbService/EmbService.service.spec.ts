/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmbServiceService } from './EmbService.service';

describe('Service: EmbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmbServiceService]
    });
  });

  it('should ...', inject([EmbServiceService], (service: EmbServiceService) => {
    expect(service).toBeTruthy();
  }));
});
