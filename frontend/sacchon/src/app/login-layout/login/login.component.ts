import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLayoutService } from '../auth-layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  user: any;

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
  }

  onSubmit() {
    this.user = this.service.login(this.form.value).subscribe(user => {
      if(user != null) {
        this.user = user;
        sessionStorage.setItem("credentials", this.user);

        if(user.role == "ROLE_PATIENT") {

          this.router.navigate(['patient/' + user.id]);
        } else if (user.role == "ROLE_DOCTOR") {

          this.router.navigate(['doctor/' + user.id]);
        } else if (user.role == "ROLE_CHIEF") {
          
          this.router.navigate(['chief']);
        }
      } else {
        alert("Wrong username or password!!");
      }  
    })
  }
}
