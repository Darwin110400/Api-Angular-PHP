import { Injectable } from '@angular/core';
import {LoginI} from '../../modelos/login.interface';
import {ResponseI} from '../../modelos/response.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { observable, Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://198.58.117.73/apirest/";
  constructor( private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "auth";
    return this.http.post<ResponseI>(direccion,form);
  }
}
