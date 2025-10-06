import { TestBed } from '@angular/core/testing';

import { RequiemDosDeusesService } from './requiem-dos-deuses.service';

describe('RequiemDosDeusesService', () => {
  let service: RequiemDosDeusesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequiemDosDeusesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
