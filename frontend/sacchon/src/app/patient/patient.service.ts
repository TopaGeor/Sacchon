import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consultations } from '../shared/consultations/consultations';
import { Patient } from '../shared/patient';
import { PatientData } from '../shared/patient-data';
import { PatientDataDetailComponent } from '../shared/patient-data-detail/patient-data-detail.component';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) {}

  readonly app = "http://localhost:9000/";


  username = "chief";
  password = "chief";

  
  getPatient(): Observable<Patient[]> {
    return this.http.get<Patient[]>(
      this.app+'patient',
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})}
    )
  }

  getPatientsNull(): Observable<Patient[]> {
    let url = this.app+"patient_null"
    return this.http.get<Patient[]>(
      url,
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})}
      );
  }

  getPatientsDetails(id): Observable<Patient[]> {
    let url = this.app+"patient/"+`${id}`
    return this.http.get<Patient[]>(
      url,
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})}
      );
  }

  getPatientsData(id): Observable<PatientData[]> {
    let url = this.app+"patient/"+`${id}`+"/data"
    return this.http.get<PatientData[]>(
      url,
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})}
      );
  }

  getPatientsDataDetail(patientId, dataId): Observable<PatientData[]> {
    let url = this.app+"patient/"+`${patientId}`+"/data/"+`${dataId}`
    return this.http.get<PatientData[]>(
      url,
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})}
      );
  }

  getPatientsConsultation(patientId, doctorId): Observable<Consultations[]> {
    let url = this.app+"doctor/"+`${doctorId}`+"/patient/"+`${patientId}`+"/consultation"
    return this.http.get<Consultations[]>(
      url,
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})}
    );
  }

  postPatientData(values): Observable<any>{
    console.log(values);
    return this.http.post(
      this.app+"patient",
      {
        'bloodGlucose':values.get('bloodGlucose').value,
        'carbIntake':values.get('carbIntake').value,
        'date':values.get(Date.now).value
      },
      {
        headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)})
      });
  }
}
