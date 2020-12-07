import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthLayoutService } from '../auth-layout.service';
import { UserInfo } from '../../shared/user-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  user: UserInfo;
  role: string;

  constructor(
    private fb: FormBuilder,
    private service: AuthLayoutService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
    this.service.currentRole.subscribe( role => this.role = role)
  }
  

  onSubmit() {
    this.service.login(this.form.value).subscribe(user => {
      if(user != null) {
        this.user = user;
        console.log(this.user)
        sessionStorage.setItem("credentials", JSON.stringify({
          id: this.user.id,
          password: this.user.password,
          role: this.user.role,
          username: this.user.name
        }));

        if(user.role == "ROLE_PATIENT") {
          this.service.currentRole.subscribe( role => this.role = role)
          this.service.roleHeader(user.role);
          this.router.navigate(['patient/' + user.id]);
        } else if (user.role == "ROLE_DOCTOR") {
          this.service.roleHeader(user.role);
          this.router.navigate(['doctor/' + user.id]);
        } else if (user.role == "ROLE_CHIEF") {
          this.service.roleHeader(user.role);
          this.router.navigate(['chief']);
        }
        this.service.userId(user.id);
      } else {
        alert("Wrong username or password!!");
      }
    })
  }
}
