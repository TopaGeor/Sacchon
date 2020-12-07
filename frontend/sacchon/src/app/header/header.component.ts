import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { AuthLayoutService } from '../login-layout/auth-layout.service';
import { UserInfo } from '../shared/user-info'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  id: number;
  isLogged: boolean;
  role: string;
  user: UserInfo;

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
    this.service.currentId.subscribe(id => this.id = id)

    let credentials: any = sessionStorage.getItem("credentials")

    if(credentials) {
      credentials = JSON.parse(credentials)

      if(credentials.role == "ROLE_PATIENT") {
        this.service.roleHeader(credentials.role);

      } else if (credentials.role == "ROLE_DOCTOR") {
        this.service.roleHeader(credentials.role);

      } else if (credentials.role == "ROLE_CHIEF") {
        this.service.roleHeader(credentials.role);

      }

      this.service.userId(credentials.id);
    }

    //this.printpath('', this.router.config);
  }

  logout() {
    sessionStorage.removeItem("credentials");
    this.isLogged = false;
    this.role = "";
    this.id = -2;
    this.router.navigate(['../']);
  }

  printpath(parent: String, config: Route[]) {
    for (let i = 0; i < config.length; i++) {
      const route = config[i];
      console.log(parent + '/' + route.path);
      if (route.children) {
        const currentPath = route.path ? parent + '/' + route.path : parent;
        this.printpath(currentPath, route.children);
      }
    }
  }
}
