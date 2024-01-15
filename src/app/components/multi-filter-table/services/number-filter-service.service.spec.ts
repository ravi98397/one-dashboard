import { TestBed } from '@angular/core/testing';

import { NumberFilterServiceService } from './number-filter-service.service';

describe('NumberFilterServiceService', () => {
  let service: NumberFilterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberFilterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
