import { RequiemDosDeusesService } from '../requisicao-HTTP/requiem-dos-deuses.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChamarConsultaService {

  constructor(
    public rs: RequiemDosDeusesService
  ) { }

  chamarConsulta(id:string): Observable<any> {
      console.log(id)
      
      return this.rs.post(`/hospital/remove-from-fila`, {
        id: id
      });
    }
}
