import { Injectable } from '@angular/core';
import { Contacto, PHONE, Fields } from '../interfaces/contacto.interface';
import { Observable, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


const httpOption = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ContactoService {

  heroesUrl = 'https://tedesoft.bitrix24.es/rest/1/nb21jbpdvay0hr62/crm.contact.add';
  contactoBitrix: Fields;
  telefonos: PHONE[];
  telefono: PHONE;
  dataRaw: string;
  constructor(private http: HttpClient) {
  }

  addContacto(contacto: Contacto): Observable<Contacto> {
    this.telefono = {
      VALUE : contacto.telefono,
      VALUE_TYPE : 'WORK',
    };


    this.contactoBitrix = {
      NAME : contacto.nombres,
      LAST_NAME : contacto.apellidos,
      ASSIGNED_BY_ID : 8,
      OPENED : 'Y',
      TYPE_ID : 'CLIENT'
    };
    console.log(this.contactoBitrix);
    console.log('{Fields : '+JSON.stringify(this.contactoBitrix)+'}');
    this.dataRaw = '{Fields : {'+JSON.stringify(this.contactoBitrix)+'}';
    return this.http.post<Contacto>(this.heroesUrl, this.dataRaw, httpOption);
  }
}
