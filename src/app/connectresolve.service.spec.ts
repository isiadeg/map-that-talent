import { TestBed } from '@angular/core/testing';

import { ConnectresolveService } from './connectresolve.service';

describe('ConnectresolveService', () => {
  let service: ConnectresolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectresolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
