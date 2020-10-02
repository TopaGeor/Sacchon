import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-null',
  templateUrl: './patient-null.component.html',
  styleUrls: ['./patient-null.component.scss']
})
export class PatientNullComponent implements OnInit {
  patientNull;
  setPatient;
  form: FormGroup;
  patientId = this.route.snapshot.paramMap.get("id");
  doctorId;
  username;
  password;

  
  constructor(
    private service: PatientService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    let credentials: any = sessionStorage.getItem("credentials")
    credentials = JSON.parse(credentials);
    this.doctorId = credentials.id;
    this.service.getPatientsNull().subscribe(
      patientNull => {this.patientNull = patientNull;
      console.log(patientNull);
    })

  }

  setOnSubmit(index) {

    this.form = this.fb.group({
      username: this.patientNull[index].username,
      password: this.patientNull[index].password,
      patientId: this.patientNull[index].patientId
    });
    console.log(this.form.value)

    this.service.setPatient(this.form.value.patientId, this.doctorId, this.form).subscribe(setPatient => {
      //this.setPatient = setPatient;
      this.router.navigateByUrl(`../patient/${this.patientId}/${this.doctorId}/ok`);
      console.log(setPatient);
    })
  }
}
