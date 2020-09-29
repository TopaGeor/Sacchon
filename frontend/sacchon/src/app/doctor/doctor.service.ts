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

  postConsultation(doctorId, patientId, values) {
    console.log(values);
    return this.http.post<Consultations[]>(
      this.app + "consultation",
      {
        'advice': values.get('advice').value,
        'date': new Date()
      },
      {
        params: {doctor_id: '1', patient_id: '3'},
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
