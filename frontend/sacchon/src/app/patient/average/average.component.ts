import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PatientData } from 'src/app/shared/patient-data';
import { PatientNullComponent } from '../patient-null/patient-null.component';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.scss']
})
export class AverageComponent implements OnInit {
  patientDataAverage;
  dailyAverageData;
  patientId =  this.route.snapshot.paramMap.get("patientId");
  form: FormGroup;
  dailyform: FormGroup;
  id = this.route.snapshot.paramMap.get("id");
  date = new Date();
  @Input() dailyBloodGlucose;
  @Input() dailycarbInTake;

  constructor(
    private fb: FormBuilder,
    private service: PatientService,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      from: [null, [Validators.required, Validators.pattern('^(19[5-9][0-9]|20[0-4][0-9]|2050)[-/](0?[1-9]|1[0-2])[-/](0?[1-9]|[12][0-9]|3[01])$')]],
      to: [null, [Validators.required, Validators.pattern('^(19[5-9][0-9]|20[0-4][0-9]|2050)[-/](0?[1-9]|1[0-2])[-/](0?[1-9]|[12][0-9]|3[01])$')]],
    });
    this.dailyform = this.fb.group({
      from: formatDate(this.date, 'yyyy-MM-dd', 'en-US'),
      to: formatDate(this.date, 'yyyy-MM-dd', 'en-US')
    });

    this.dailyAverage();
  }
  
  onSubmit() { 
    this.service.getPatientsDataAverage(this.patientId, this.dailyform.value).subscribe(
      patientDataAverage => {this.patientDataAverage = patientDataAverage;
    })
  }

  dailyAverage() {
    this.service.getPatientsDataAverage(this.patientId, this.dailyform.value).subscribe(
      dailyAverageData => { this.dailyAverageData = dailyAverageData;
      this.dailyBloodGlucose = dailyAverageData[0].bloodGlucose;
      this.dailycarbInTake = dailyAverageData[0].carbIntake;
      console.log(this.dailyBloodGlucose, this.dailycarbInTake)

    })
  }

  dailyModal(dailyContent) {
    const modalRef = this.modalService.open(dailyContent, { centered: true });
    modalRef.componentInstance.dailyBloodGlucose = this.dailyAverageData.bloodGlucose;
    modalRef.componentInstance.dailycarbInTake = this.dailyAverageData.carbInTake;
    
  }

  specificModal(specificContent) {
    const modalRef = this.modalService.open(specificContent, { centered: true });
    modalRef.componentInstance.dailyBloodGlucose = this.dailyAverageData.bloodGlucose;
    modalRef.componentInstance.dailycarbInTake = this.dailyAverageData.carbInTake;
    
  }

}
