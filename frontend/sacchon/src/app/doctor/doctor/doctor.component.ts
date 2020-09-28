import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/shared/doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  doctors: Doctor[];

  constructor(private service: DoctorService) { }

  ngOnInit() {
    this.service.getDoctors().subscribe(
      doctors => {this.doctors = doctors;
      console.log(doctors);
      }
    );
  }
}
