import { TestBed } from '@angular/core/testing';

import { DateFilterSerivceService } from './date-filter-serivce.service';

describe('DateFilterSerivceService', () => {
  let service: DateFilterSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateFilterSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
