/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProgramServiceService } from './ProgramService.service';

describe('Service: ProgramService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramServiceService]
    });
  });

  it('should ...', inject([ProgramServiceService], (service: ProgramServiceService) => {
    expect(service).toBeTruthy();
  }));
});
