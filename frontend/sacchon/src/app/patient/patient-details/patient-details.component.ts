import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  patientDetail;
  id =  this.route.snapshot.paramMap.get("id");

  constructor(
    private service: PatientService,
    private route: ActivatedRoute
    ) {}
    
  ngOnInit() {
    this.service.getPatientsDetails(this.id).subscribe(
      patientDetail => {this.patientDetail = patientDetail;
      console.log(patientDetail);
    })
  }

}
