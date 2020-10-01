import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthLayoutService } from '../auth-layout.service';

@Component({
  selector: 'app-chief-doctor-login',
  templateUrl: './chief-doctor-login.component.html',
  styleUrls: ['./chief-doctor-login.component.scss']
})
export class ChiefDoctorLoginComponent implements OnInit {
  form: FormGroup;
  chief;
  id =  this.route.snapshot.paramMap.get("id");

  constructor(
    private fb: FormBuilder,
    private service: AuthLayoutService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onSubmit() {
    this.chief = this.service.doctorLogin(this.form.value).subscribe(
      chief => {this.chief = chief;
      this.chief.navigate(['chief/'+chief.id])
    })
  }
}
