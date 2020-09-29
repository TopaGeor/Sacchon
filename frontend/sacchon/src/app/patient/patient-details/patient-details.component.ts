import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit, OnDestroy {
  patientDetail;
  id =  this.route.snapshot.paramMap.get("id");
  patientDetailSubscr: Subscription;

  constructor(
    private service: PatientService,
    private route: ActivatedRoute
  ) {}

    
  ngOnInit() {
    this.patientDetailSubscr = this.service.getPatientsDetails(this.id).subscribe(
      patientDetail => {this.patientDetail = patientDetail;
      console.log(patientDetail);
    })
  }

  ngOnDestroy() {
    this.patientDetailSubscr.unsubscribe();
  }
}
