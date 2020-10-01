import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthLayoutService } from '../auth-layout.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.scss']
})
export class DoctorLoginComponent implements OnInit {
  form: FormGroup;
  doctor;
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
    this.doctor = this.service.doctorLogin(this.form.value).subscribe(
      patient => {this.doctor = patient;
      this.doctor.navigate(['doctor/'+patient.id])
    })
  }
}
