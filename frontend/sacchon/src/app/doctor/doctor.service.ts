import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../shared/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

<<<<<<< HEAD
  readonly app = "http://localhost:9000/";

  username = "chief";
  password = "chief";

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(
      this.app + 'doctor',
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})}
    );
=======
  constructor(private http: HttpClient) {}

  readonly app = "http://localhost:9000/";

  username = "dimitris";
  password = "1234";

  getDoctor(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(
      this.app+'doctor',
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+ ':' +this.password)})}
    )
>>>>>>> origin/master
  }
}
