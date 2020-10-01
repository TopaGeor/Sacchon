import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthLayoutService {

  constructor(private http: HttpClient) {}

  responseOfAuth = new Subject<boolean>();
  data;
  readonly app = "http://localhost:9000/";

  login(opts): Observable<any>  {
    this.data = this.http.get<any>(
      this.app + 'login/' + opts.username + '/' + opts.password
    )
    if(this.data === null){
      this.responseOfAuth.next(false);
    } else {
      this.responseOfAuth.next(true);
    }

    return this.data;
  }
}
