import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consultations } from '../doctor/consultations/consultations';
import { Doctor } from '../shared/doctor';
import { Patient } from '../shared/patient';
import { PatientData } from '../shared/patient-data';
import { NeedConsultComponent } from './need-consult/need-consult.component';

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

  nonActivePatients(opts): Observable<Patient[]> {
    let url = this.app + "chief/noActivity";
    return this.http.get<Patient[]>(
      url,
      {
        params: opts,
        headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})
      }
    )
  }

  nonActiveDoctor(opts): Observable<Doctor[]> {
    let url = this.app + "chief/noActivity";
    return this.http.get<Doctor[]>(
      url,
      {
        params: opts,
        headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})
      }
    )
  }

  needConsult(): Observable<Patient[]> {
    return this.http.get<Patient[]>(
      this.app + "chief/needCons",
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})}
    );

  }
}
