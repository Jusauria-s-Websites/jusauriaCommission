/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArtServiceService } from './ArtService.service';

describe('Service: ArtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtServiceService]
    });
  });

  it('should ...', inject([ArtServiceService], (service: ArtServiceService) => {
    expect(service).toBeTruthy();
  }));
});
