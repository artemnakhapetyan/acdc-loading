import { TestBed } from '@angular/core/testing';

import { AcdcLoadingService } from './acdc-loading.service';

describe('AcdcLoadingService', () => {
  let service: AcdcLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcdcLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
