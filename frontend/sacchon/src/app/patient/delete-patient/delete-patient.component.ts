import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.scss']
})
export class DeletePatientComponent implements OnInit {
  patient;
  id =  this.route.snapshot.paramMap.get("id");

  constructor(
    private route: ActivatedRoute,
    private service: PatientService
    
  ) { }

  ngOnInit() {
    this.service.deletePatient(this.id).subscribe(
      patient => {
        this.patient = patient;
        console.log("patient Data deleted");
      })
  }

}
