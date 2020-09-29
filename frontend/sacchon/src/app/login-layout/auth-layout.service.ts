import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthLayoutService {

  constructor(private http: HttpClient) {}

  readonly app = "http://localhost:9000/";


  username: string;
  password: string;
}
