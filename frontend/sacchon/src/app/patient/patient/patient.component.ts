import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  patientData: any;

  constructor(private service: PatientService) { }

  ngOnInit(): void {
    this.service.getPatient().subscribe(x => this.patientData = x);
  }

}
