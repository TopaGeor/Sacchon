import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/shared/patient';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  patients: Patient[];
  doctorId = this.route.snapshot.paramMap.get("doctorId");

  constructor(
    private service: DoctorService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.service.getDoctorsPatients(this.doctorId).subscribe(
      patients => {this.patients = patients;
      console.log(patients);
      }
    );
  }
}
