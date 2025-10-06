import { TestBed } from '@angular/core/testing';

import { ChamarTriagemService } from './chamar-triagem.service';

describe('ChamarTriagemService', () => {
  let service: ChamarTriagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChamarTriagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
