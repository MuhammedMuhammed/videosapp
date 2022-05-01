import { TestBed } from '@angular/core/testing';

import { MoviesservicesService } from './moviesservices.service';

describe('MoviesservicesService', () => {
  let service: MoviesservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
