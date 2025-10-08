import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID, ViewChild, ElementRef } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Router, } from '@angular/router';

import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ChamarTriagemService } from '../services/triagem/chamar-triagem.service';


@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.html',
  styleUrl: './add-paciente.scss',
  imports: [CommonModule, FormsModule, NgxMaskDirective],
  standalone: true
})
export class AddPaciente implements OnInit {
  // O token deve ser uma string, pois localStorage armazena strings.
  public tokenHospital: string = '';
  isButtonVisible: boolean = true;
  isContainerRight: boolean = true;


  //configs
  public nomePaciente: string = '';
  public cpf: string = '';
  public sus: string = '';

  public sintomas: string = '';
  public classificacaoRisco: string = '';


  //
  currentMargin: string = '0';
  left: string = '1%';


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    public chamar_triagem_service: ChamarTriagemService
  ) { }

  ngOnInit(): void {
    // 1. Acesso seguro ao localStorage (apenas no browser)
    if (isPlatformBrowser(this.platformId)) {
      this.tokenHospital = localStorage.getItem('tokenHospital') || '';
    }
  }
  voltarHome() {
    this.nomePaciente = '';
    this.cpf = '';
    this.sus = '';
    this.sintomas = ''
    this.classificacaoRisco = '';
    this.router.navigate(['/cadastrar-paciente'])

  }
  avancarClassificacao() {
    if (this.nomePaciente == '' || this.nomePaciente == undefined || this.nomePaciente == null || this.cpf == '' || this.cpf == undefined || this.cpf == null || this.sus == '' || this.sus == undefined || this.sus == null) {
      alert("Preencha os campos corretamente!")
    }
    else {
      this.currentMargin = '50%';
      this.left = '89%';
    }
  }

  chamarTriagem() {
    let cor_pulseiras = this.classificacaoRisco;
    let id = this.tokenHospital;

    if (cor_pulseiras == '' || cor_pulseiras == undefined || cor_pulseiras == null || id == '' || id == undefined || id == null || this.sintomas == '' || this.sintomas == undefined || this.sintomas == null) {
      alert("Preencha os campos corretamente!")
      console.log(cor_pulseiras, id)
    }
    else if (cor_pulseiras == 'vermelho') {
      alert("Paciente cadastrado com sucesso!");
      this.nomePaciente = '';
      this.cpf = '';
      this.sus = '';
      this.sintomas = '';
      this.classificacaoRisco = '';
      this.router.navigate(['/cadastrar-paciente'])
    }

    else {
      this.chamar_triagem_service
        .chamarTriagem(this.tokenHospital, this.classificacaoRisco)
        .subscribe({
          // 1. CALLBACK DE SUCESSO (next) - Chamado SOMENTE se o HTTP retornar 200/OK
          next: async (_res: any) => {
            if (_res.message == 'Fila atualizado com sucesso') {
              alert("Paciente cadastrado com sucesso!");
              this.nomePaciente = '';
              this.cpf = '';
              this.sus = '';
              this.sintomas = '';
              this.classificacaoRisco = '';
              this.router.navigate(['/cadastrar-paciente'])
            } 
            else{
              alert("Erro interno");
            }
          },
          error: (err) => {
            // ... lógica do alert
            alert('Não há um hospital cadastrado nesse id!');

            // Aplicar o setTimeout após o alert do erro aqui
            setTimeout(() => {
              this.currentMargin = '0';
            }, 0);
          }

        });
    }
  }

  voltarClassificacao() {
    this.currentMargin = '0';
    this.isContainerRight = true;
    this.left = '20px';

  }

}

