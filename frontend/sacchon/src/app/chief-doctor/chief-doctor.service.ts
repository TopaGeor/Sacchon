import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consultations } from '../doctor/consultations/consultations';
import { PatientData } from '../shared/patient-data';

@Injectable({
  providedIn: 'root'
})
export class ChiefDoctorService {

  constructor(private http: HttpClient) { }

  readonly app = "http://localhost:9000/";

  username = "chief";
  password = "chief";

  infoSubData(opts): Observable<PatientData[]> {
    let url = this.app + "chief";
    return this.http.get<PatientData[]>(
      url,
      {
        params: opts,
        headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})
      }
    )
  }

  infoSubConsult(opts): Observable<Consultations[]> {
    let url = this.app + "chief";
    return this.http.get<Consultations[]>(
      url,
      {
        params: opts,
        headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})
      }
    )
  }
}
