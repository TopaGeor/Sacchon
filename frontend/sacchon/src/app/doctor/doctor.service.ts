import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../shared/doctor';
import { Consultations } from './consultations/consultations';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  readonly app = "http://localhost:9000/";

  username = "doctor";
  password = "doctor";

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(
      this.app + 'doctor',
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})}
    );
  }

  getDoctorDetails(doctorId): Observable<Doctor[]> {
    let url = this.app + "doctor/" + `${doctorId}`;
    return this.http.get<Doctor[]>(
      url,
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})}
    );
  }

  getConsultation(patientId, doctorId): Observable<Consultations[]> {
    let url = this.app + "consultation"
    return this.http.get<Consultations[]>(
      url,
      {
        params: {doctor_id: doctorId, patient_id: patientId },
        headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})}
    );
  }

  postConsultation(doctorId, patientId, values) {

    const url = this.app + "consultation";
    console.log(url);
    console.log(values);
    return this.http.post<Consultations[]>(
      url,
      {
        'advice': values.get('advice').value,
        'dateCreated': new Date()
      },
      {
        params: { 'doctor_id': doctorId, 'patient_id': patientId},
        headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)})
      }
    );
  }

  putConsultation(doctorId, patientId, consId, values): Observable<Consultations[]> {
    console.log(values);
    return this.http.put<Consultations[]>(
      this.app + "doctor/" + doctorId + "/patient/" + patientId + "/consultation/" + consId,
      {
        'advice': values.get('advice').value,
        'date': new Date()
      },
      {
        headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)})
      }
    );
  }

  deleteDoctor(doctorId): Observable<any>{
    return this.http.delete<any>(
      this.app+"doctor/" + doctorId,
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' + this.password)})}
    )
  }
}
