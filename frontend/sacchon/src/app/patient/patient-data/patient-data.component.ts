import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientData } from 'src/app/shared/patient-data';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.scss']
})
export class PatientDataComponent implements OnInit {
  patientsData: PatientData[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
