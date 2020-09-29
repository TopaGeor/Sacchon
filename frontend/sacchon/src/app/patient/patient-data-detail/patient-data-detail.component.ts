import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../patient/patient.service';

@Component({
  selector: 'app-patient-data-detail',
  templateUrl: './patient-data-detail.component.html',
  styleUrls: ['./patient-data-detail.component.scss']
})
export class PatientDataDetailComponent implements OnInit {
  patientDataDetail;
  patient_id = this.route.snapshot.paramMap.get("patient_id");
  id = this.route.snapshot.paramMap.get("id");
  

  constructor(
    private service: PatientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.service.getPatientsDataDetail(this.patient_id, this.id).subscribe(
      patientDataDetail => { this.patientDataDetail = patientDataDetail;
      console.log(patientDataDetail);
      })
  }
}
