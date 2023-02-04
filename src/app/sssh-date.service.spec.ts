import { TestBed } from '@angular/core/testing';

import { SsshDateService } from './sssh-date.service';

describe('SsshDateService', () => {
  let service: SsshDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsshDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
