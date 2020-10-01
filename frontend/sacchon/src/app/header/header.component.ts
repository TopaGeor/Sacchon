import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthLayoutService } from '../login-layout/auth-layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');
  isLogged: boolean;

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
      this.isLogged = true;
      console.log("ngOnInit");
      console.log(sessionStorage.getItem("credentials"))
      console.log("ngOnInit");
      //this.router.navigate(['./patient/' + this.id]);
    }
    this.service.responseOfAuth.subscribe(data => {
      this.isLogged = data;
    })
  }

  logout() {
    sessionStorage.removeItem("credentials");
    this.isLogged = false;
    this.router.navigate(['../']);
  }
}
