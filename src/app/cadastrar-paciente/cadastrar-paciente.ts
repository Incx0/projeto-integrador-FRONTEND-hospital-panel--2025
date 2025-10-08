import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID, ViewChild, ElementRef } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ChamarConsultaService } from '../services/consulta/chamar-consulta.service';

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
    private router: Router,
    public chamar_consulta_service: ChamarConsultaService
  ) { }

  ngOnInit(): void {
    // 1. Acesso seguro ao localStorage (apenas no browser)
    if (isPlatformBrowser(this.platformId)) {
      this.tokenHospital = localStorage.getItem('tokenHospital') || '';
      this.isButtonVisible = true;

    }
  }

  currentMargin: string = '0';
  left: string = '1%';

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

  chamarConsultaArrasto(): void {
    // Se você quer que essa rota também dependa do token:
    if (this.tokenHospital.trim()) {
      this.currentMargin = '50%';

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



  chamarConsulta() {

    let id = this.tokenHospital;

    if (id == '' || id == undefined || id == null) {
      alert("Preencha os campos corretamente!")
      console.log(id)
    }
    else {
      this.chamar_consulta_service
        .chamarConsulta(this.tokenHospital)
        .subscribe({
          // 1. CALLBACK DE SUCESSO (next) - Chamado SOMENTE se o HTTP retornar 200/OK
          next: async (_res: any) => {
            if (_res.message == 'Fila atualizado com sucesso') {
              alert('Paciente chamado para consulta.')
              window.location.reload();
            } else {
              alert('Não há pacientes na fila.')
              window.location.reload();
            }
          },
          error: (err) => {
            // ... lógica do alert
            alert('Não há um hospital cadastrado nesse id!');
            window.location.reload();
            // Aplicar o setTimeout após o alert do erro aqui

          }
        });


    }
  }




}
