import { Injectable } from '@angular/core';
import { Equipo } from '../interfaces/equipo.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  equipos: Equipo = {};
  cargada = false;
  constructor(private http: HttpClient) {
    this.http.get('assets/data/data_equipo.json')
    .subscribe( (data: Equipo) => {
      this.cargada = true;
      this.equipos = data;
    });
   }
}
