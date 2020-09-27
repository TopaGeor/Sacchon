import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-null',
  templateUrl: './patient-null.component.html',
  styleUrls: ['./patient-null.component.scss']
})
export class PatientNullComponent implements OnInit {
  patientNull;

  constructor(
    private service: PatientService
  ) { }

  ngOnInit() {
    this.service.getPatientsNull().subscribe(
      patientNull => {this.patientNull = patientNull;
      console.log(patientNull);
    })
  }


}
