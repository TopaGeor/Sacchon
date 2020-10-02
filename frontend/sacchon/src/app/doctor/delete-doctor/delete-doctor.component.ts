import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-delete-doctor',
  templateUrl: './delete-doctor.component.html',
  styleUrls: ['./delete-doctor.component.scss']
})
export class DeleteDoctorComponent implements OnInit, OnDestroy {
  doctor;
  doctorId = this.route.snapshot.paramMap.get("doctorId");
  docSub = new Subscription;

  constructor(
    private service: DoctorService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.docSub = this.service.deleteDoctor(this.doctorId).subscribe(doctor => {
      this.doctor = doctor;
      console.log("doctor deleted");
    });
  }

  ngOnDestroy() {
    this.docSub.unsubscribe();
  }
}
