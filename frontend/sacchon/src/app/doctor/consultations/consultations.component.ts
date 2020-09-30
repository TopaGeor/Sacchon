import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss']
})
export class ConsultationsComponent implements OnInit {
  patientConsultation;
  patientId =  this.route.snapshot.paramMap.get("patientId");
  doctorId =  this.route.snapshot.paramMap.get("doctorId");

  constructor(
    private service: DoctorService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getConsultation(this.patientId, this.doctorId).subscribe(
      patientConsultation => {this.patientConsultation = patientConsultation;
      console.log(patientConsultation);
    })
  }

}
