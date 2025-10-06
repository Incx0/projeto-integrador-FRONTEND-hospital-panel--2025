import { TestBed } from '@angular/core/testing';

import { ChamarConsultaService } from './chamar-consulta.service';

describe('ChamarConsultaService', () => {
  let service: ChamarConsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChamarConsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
