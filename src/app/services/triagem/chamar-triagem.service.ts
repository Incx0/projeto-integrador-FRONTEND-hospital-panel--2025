import { RequiemDosDeusesService } from '../requisicao-HTTP/requiem-dos-deuses.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChamarTriagemService {
  
  constructor(
    public rs: RequiemDosDeusesService
  ) { }

  chamarTriagem(id:string, cor_pulseiras:string): Observable<any> {
    console.log(id, cor_pulseiras)
    
    return this.rs.post(`/hospital/update-fila`, {
      id: id,
      cor: cor_pulseiras
    });
  }
}



