import { TestBed } from '@angular/core/testing';

import { TextFilterServiceService } from './text-filter-service.service';

describe('TextFilterServiceService', () => {
  let service: TextFilterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextFilterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
