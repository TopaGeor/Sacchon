import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../shared/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) {}

  readonly app = "http://localhost:9000/";


  username = "dimitris";
  password = "1234";

  
  getPatient(): Observable<Patient[]> {
    return this.http.get<Patient[]>(
      this.app+'patient',
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})}
    )
  }

  getPatientsDetails(id): Observable<Patient[]> {
    let url = this.app+"patient/"+`${id}`
    return this.http.get<Patient[]>(
      url,
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})});
  }
}
