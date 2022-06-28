import { TestBed } from '@angular/core/testing';

import { FetchingDataService } from './fetching-data.service';

describe('FetchingDataService', () => {
  let service: FetchingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
