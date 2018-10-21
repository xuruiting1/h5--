import { TestBed } from '@angular/core/testing';

import { Common2Service } from './common2.service';

describe('Common2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Common2Service = TestBed.get(Common2Service);
    expect(service).toBeTruthy();
  });
});
