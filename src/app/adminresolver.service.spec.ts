import { TestBed } from '@angular/core/testing';

import { AdminresolverService } from './adminresolver.service';

describe('AdminresolverService', () => {
  let service: AdminresolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminresolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
