import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/patient/patient.service';

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
    private service: PatientService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onSubmit() {
    this.service.getPatient().subscribe(
      patient => {this.patient = patient;
      console.log(patient);
    })
  }

}
