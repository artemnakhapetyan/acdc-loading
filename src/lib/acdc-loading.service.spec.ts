import { TestBed, inject } from '@angular/core/testing';

import { AcdcLoadingService } from './acdc-loading.service';

describe('AcdcLoadingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcdcLoadingService]
    });
  });

  it('should be created', inject([AcdcLoadingService], (service: AcdcLoadingService) => {
    expect(service).toBeTruthy();
  }));
});
