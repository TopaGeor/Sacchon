import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consultations } from '../shared/consultations/consultations';
import { Patient } from '../shared/patient';
import { PatientData } from '../shared/patient-data';

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
    let url = this.app+"patient/"+patientId+"/data/"+dataId
    return this.http.get<PatientData[]>(
      url,
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})}
      );
  }

  getPatientsDataAverage(patientId, opts): Observable<PatientData[]> {
    let url = this.app+"patient/"+patientId+"/data/average";
    return this.http.get<PatientData[]>(
      url,
      {params: opts, 
        headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})}
    )
  }

  getPatientsConsultation(patientId, doctorId): Observable<Consultations[]> {
    let url = this.app+"doctor/"+`${doctorId}`+"/patient/"+`${patientId}`+"/consultation"
    return this.http.get<Consultations[]>(
      url,
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})}
    );
  }

  postPatientData(id, values): Observable<PatientData[]>{
    console.log(values);
    return this.http.post<PatientData[]>(
      this.app+"patient/"+`${id}`+"/data",
      {
        'bloodGlucose':values.get('bloodGlucose').value,
        'carbIntake':values.get('carbIntake').value,
        'date': new Date()
      },
      {
        headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)})
      });
  }

  putPatientData(patientId, dataId, values): Observable<PatientData[]>{
    console.log(values);
    return this.http.post<PatientData[]>(
      this.app+"patient/"+patientId+"/data/"+dataId,
      {
        'bloodGlucose':values.get('bloodGlucose').value,
        'carbIntake':values.get('carbIntake').value,
        'date': new Date()
      },
      {
        headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)})
      });
  }

  deletePatientData(patientId, dataId): Observable<any>{
    return this.http.delete<any>(
      this.app+"patient/"+patientId+"/data/"+dataId,
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})}
    )
  }

}
