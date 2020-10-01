import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PatientService } from '../../patient/patient.service';

@Component({
  selector: 'app-patient-data-detail',
  templateUrl: './patient-data-detail.component.html',
  styleUrls: ['./patient-data-detail.component.scss']
})
export class PatientDataDetailComponent implements OnInit {
  patientDataDetail;
  patientId = this.route.snapshot.paramMap.get("patientId");
  dataId = this.route.snapshot.paramMap.get("dataId");

  constructor(
    private service: PatientService,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.service.getPatientsDataDetail(this.patientId, this.dataId).subscribe(
      patientDataDetail => { this.patientDataDetail = patientDataDetail;
      console.log(patientDataDetail);
      })
  }

  onClickDelete() {
    this.modalService.dismissAll;
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}
