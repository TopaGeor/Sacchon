import { Component, OnDestroy, OnInit } from '@angular/core';
import { Patient } from '../../shared/patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  patients: Patient[];

  constructor(private service: PatientService) { }

  ngOnInit() {
    this.service.getPatient().subscribe(
      patients => {this.patients = patients;
      console.log(patients);
    })
  }

}
