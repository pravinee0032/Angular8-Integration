import { TestBed } from '@angular/core/testing';

import { AtsService } from './ats.service';

describe('AtsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtsService = TestBed.get(AtsService);
    expect(service).toBeTruthy();
  });
});
