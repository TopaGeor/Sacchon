import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthLayoutService } from '../login-layout/auth-layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  id;
  isLogged: boolean;
  role: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AuthLayoutService
  ) { }

  ngOnInit() {
    if(sessionStorage.getItem("credentials") === null) {
      this.isLogged = false;
      this.router.navigate(['']);
    } else {
      var temp = JSON.parse(sessionStorage.getItem("credentials"));
      this.id = temp.id;
      this.isLogged = true;
      console.log(sessionStorage.getItem("credentials"))

      //this.router.navigate(['./patient/' + this.id]);
    }
    this.service.responseOfAuth.subscribe(data => {
      this.isLogged = data;
    })
    this.service.currentRole.subscribe( role => this.role = role)
  }

  logout() {
    sessionStorage.removeItem("credentials");
    this.isLogged = false;
    this.role = "";
    this.router.navigate(['../']);
  }
}
