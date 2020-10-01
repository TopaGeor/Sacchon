import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../shared/patient';

@Injectable({
  providedIn: 'root'
})
export class AuthLayoutService {

  constructor(private http: HttpClient) {}

  readonly app = "http://localhost:9000/";


  patientLogin(opts): Observable<any> {
    return this.http.get<any>(
      this.app+'login/'+opts.username + '/' +opts.password
    )
  }

  doctorLogin(opts): Observable<any> {
    return this.http.get<any>(
      this.app+'login/'+opts.username + '/' +opts.password
    )
  }

  chiefLogin(opts): Observable<any> {
    return this.http.get<any>(
      this.app+'login/'+opts.username + '/' +opts.password
    )
  }
}
