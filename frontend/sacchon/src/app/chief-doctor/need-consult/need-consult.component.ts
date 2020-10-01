import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/patient';
import { ChiefDoctorService } from '../chief-doctor.service';

@Component({
  selector: 'app-need-consult',
  templateUrl: './need-consult.component.html',
  styleUrls: ['./need-consult.component.scss']
})

export class NeedConsultComponent implements OnInit {
  patientsNeedCons;
  elapsedTime;

  constructor(private service: ChiefDoctorService) { }

  ngOnInit() {
    this.service.needConsult().subscribe(patientsNeedCons => {
        this.patientsNeedCons = patientsNeedCons;
        console.log(patientsNeedCons);
      }
    );
  }
}
