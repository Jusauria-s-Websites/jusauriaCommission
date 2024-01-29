/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImgurAPIService } from './imgurAPI.service';

describe('Service: ImgurAPI', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImgurAPIService]
    });
  });

  it('should ...', inject([ImgurAPIService], (service: ImgurAPIService) => {
    expect(service).toBeTruthy();
  }));
});
