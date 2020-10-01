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


  patientLogin(username, password): Observable<Patient[]> {
    return this.http.post<Patient[]>(
      this.app+'patient/login',
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( username+ ':' +password)})}
    )
  }
}
