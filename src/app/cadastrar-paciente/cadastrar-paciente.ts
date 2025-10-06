import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID, ViewChild, ElementRef } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastrar-paciente',
  // Usando standalone: true para simplicidade, se seu projeto for baseado em módulos, 
  // certifique-se de que este componente esteja declarado no AppModule.
  standalone: true,
  templateUrl: './cadastrar-paciente.html',
  styleUrls: ['./cadastrar-paciente.scss'],
  imports: [CommonModule, FormsModule] // FormsModule para [(ngModel)] e CommonModule para isPlatformBrowser
})
export class CadastrarPaciente implements OnInit {

  // O token deve ser uma string, pois localStorage armazena strings.
  public tokenHospital: string = '';
  public tokenError: boolean = false; // Flag para mostrar erro de validação
  isButtonVisible: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) { }

  ngOnInit(): void {
    // 1. Acesso seguro ao localStorage (apenas no browser)
    if (isPlatformBrowser(this.platformId)) {
      this.tokenHospital = localStorage.getItem('tokenHospital') || '';
      this.isButtonVisible = true;

    }
  }

  // Função chamada pelo botão de Salvar/Configurar
  salvarToken(): void {

    const tokenLimpo = this.tokenHospital ? this.tokenHospital.trim() : '';
    const regexNumeros = /^\d+$/;

    if (this.tokenHospital == '' || this.tokenHospital == undefined || this.tokenHospital == null) {
      alert('Preencha o campo de ID do Hospital corretamente!');
    }
    else if (!regexNumeros.test(tokenLimpo)) {

      alert('O ID do Hospital deve conter APENAS números (dígitos de 0 a 9).');

      this.tokenError = true;
      return;
    }

    else {
      if (!this.tokenHospital.trim()) {
        this.tokenError = true;
      }

      else {
        this.tokenError = false;
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('tokenHospital', this.tokenHospital.trim());
          this.isButtonVisible = true;

          if (isPlatformBrowser(this.platformId)) {
            this.tokenHospital = localStorage.getItem('tokenHospital') || '';
            this.isButtonVisible = true;

          }


        }
      }
    }
  }

  cadastrarPaciente(): void {
    if (this.tokenHospital.trim()) {
      this.router.navigate(['/add-paciente']);
    } else {
      alert('O token do hospital é necessário para cadastrar pacientes');

    }
  }

  chamarConsulta(): void {
    // Se você quer que essa rota também dependa do token:
    if (this.tokenHospital.trim()) {
      this.router.navigate(['/chamar-paciente']);
    } else {
      this.tokenError = true;
      alert('O token do hospital é necessário para chamar consultas');
    }
  }

  // Função que limpa o token (como sugerido anteriormente)
  resetarToken(): void {
    this.tokenHospital = '';
    this.tokenError = false;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('tokenHospital');
      this.isButtonVisible = false;
      
    }
  }
}
