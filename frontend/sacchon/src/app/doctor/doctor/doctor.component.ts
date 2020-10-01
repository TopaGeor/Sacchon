import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/patient/patient.service';
import { Patient } from 'src/app/shared/patient';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  patients: Patient[];
  patientsNull;
  doctorId = this.route.snapshot.paramMap.get("doctorId");
  patientId = this.route.snapshot.paramMap.get("patientId");

  constructor(
    private service: DoctorService,
    private servicePatient: PatientService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.service.getDoctorsPatients(this.doctorId).subscribe(
      patients => {this.patients = patients;
      console.log(patients);
      }
    );
  }

  getPatientNull() {
    this.servicePatient.getPatientsNull().subscribe(
      patientsNull => {this.patientsNull = patientsNull;
      console.log(patientsNull);
      }
    );
  }
}
