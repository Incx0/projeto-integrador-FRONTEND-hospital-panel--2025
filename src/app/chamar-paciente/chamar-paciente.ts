import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID, ViewChild, ElementRef } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ChamarConsultaService } from '../services/consulta/chamar-consulta.service';



@Component({
  selector: 'app-chamar-paciente',
  templateUrl: './chamar-paciente.html',
  styleUrl: './chamar-paciente.scss',
  imports: [CommonModule, FormsModule]
})
export class ChamarPaciente implements OnInit {
  // O token deve ser uma string, pois localStorage armazena strings.
  public tokenHospital: string = '';
  isButtonVisible: boolean = true;
  isContainerRight: boolean = true;


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    public chamar_consulta_service: ChamarConsultaService
  ) { }

  ngOnInit(): void {
    // 1. Acesso seguro ao localStorage (apenas no browser)
    if (isPlatformBrowser(this.platformId)) {
      this.tokenHospital = localStorage.getItem('tokenHospital') || '';
    }
  }

  
}