import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthLayoutService } from '../auth-layout.service';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.scss']
})
export class PatientLoginComponent implements OnInit {
  form: FormGroup;
  patient;

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
    this.patient = this.service.patientLogin(this.form.value).subscribe(
      patient => {this.patient = patient;
      this.router.navigate(['patient/'+patient.id])
    })
  }

}