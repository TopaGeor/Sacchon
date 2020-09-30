import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-delete-doctor',
  templateUrl: './delete-doctor.component.html',
  styleUrls: ['./delete-doctor.component.scss']
})
export class DeleteDoctorComponent implements OnInit {
  doctor;
  doctorId = this.route.snapshot.paramMap.get("doctorId");

  constructor(
    private service: DoctorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.service.deleteDoctor(this.doctorId).subscribe(doctor => {
      this.doctor = doctor;
      console.log("doctor deleted");
    });
  }

}
