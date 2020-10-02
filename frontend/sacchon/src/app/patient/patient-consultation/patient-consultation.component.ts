import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-consultation',
  templateUrl: './patient-consultation.component.html',
  styleUrls: ['./patient-consultation.component.scss']
})
export class PatientConsultationComponent implements OnInit {
  patientId = this.route.snapshot.paramMap.get("id");
  patientConsultation;

  constructor(
    private service: PatientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.service.getPatientsConsultations(this.patientId).subscribe(
      patientConsultation => {this.patientConsultation = patientConsultation;
      console.log(patientConsultation);
    })
  }
}
