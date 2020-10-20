import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { Doctor } from 'src/app/shared/doctor';

@Component({
  selector: 'app-chief-doctor',
  templateUrl: './chief-doctor.component.html',
  styleUrls: ['./chief-doctor.component.scss']
})
export class ChiefDoctorComponent implements OnInit {
  doctors: Doctor[];

  constructor(private service: DoctorService) { }

  ngOnInit() {
    // this.service.getDoctors().subscribe(
    //   doctors => {this.doctors = doctors;
    //   console.log(doctors);
    //   }
    // );
  }
}
