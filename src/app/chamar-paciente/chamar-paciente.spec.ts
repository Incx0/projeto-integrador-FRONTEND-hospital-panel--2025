import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamarPaciente } from './chamar-paciente';

describe('ChamarPaciente', () => {
  let component: ChamarPaciente;
  let fixture: ComponentFixture<ChamarPaciente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChamarPaciente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamarPaciente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
