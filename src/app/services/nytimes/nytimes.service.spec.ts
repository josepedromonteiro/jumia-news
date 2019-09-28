import { TestBed } from '@angular/core/testing';

import { NYTimesService } from './nytimes.service';

describe('NYTimesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NYTimesService = TestBed.get(NYTimesService);
    expect(service).toBeTruthy();
  });
});
