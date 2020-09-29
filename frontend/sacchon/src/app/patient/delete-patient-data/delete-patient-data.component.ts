import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-delete-patient-data',
  templateUrl: './delete-patient-data.component.html',
  styleUrls: ['./delete-patient-data.component.scss']
})
export class DeletePatientDataComponent implements OnInit {
  patientDataDetail;
  patientId = this.route.snapshot.paramMap.get("patientId");
  dataId = this.route.snapshot.paramMap.get("dataId");

  constructor(
    private service: PatientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.service.deletePatientData(this.patientId, this.dataId).subscribe(
      patientDataDetail => {
        this.patientDataDetail = patientDataDetail;
        console.log("patient Data deleted");
      })
  }

}
