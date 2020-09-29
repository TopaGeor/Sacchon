import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consultations } from '../shared/consultations/consultations';
import { Doctor } from '../shared/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  readonly app = "http://localhost:9000/";

  username = "chief";
  password = "chief";

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

  postConsultation(doctorId, patientId, values) {
    console.log(values);
    return this.http.post<Consultations[]>(
      this.app + "consultation?doctor_id=" + `${doctorId}` + "&?patient_id=" + `${patientId}`,
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
      this.app+"patient/" + doctorId,
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' + this.password)})}
    )
  }
}
