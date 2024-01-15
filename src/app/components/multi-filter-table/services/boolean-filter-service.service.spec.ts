import { TestBed } from '@angular/core/testing';

import { BooleanFilterServiceService } from './boolean-filter-service.service';

describe('BooleanFilterServiceService', () => {
  let service: BooleanFilterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooleanFilterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
