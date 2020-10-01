import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChiefDoctorService } from '../chief-doctor.service';

@Component({
  selector: 'app-info-sub-consult',
  templateUrl: './info-sub-consult.component.html',
  styleUrls: ['./info-sub-consult.component.scss']
})
export class InfoSubConsultComponent implements OnInit {
  infoSubConsult;
  doctorId = this.route.snapshot.paramMap.get("doctorId");
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: ChiefDoctorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      doctor_id: this.doctorId,
      from: [null, Validators.required],
      to: [null, Validators.required],
    });
  }

  onSubmit() {
    this.service.infoSubConsult(this.form.value).subscribe(infoSubConsult  => {
      this.infoSubConsult  = infoSubConsult;
      console.log(infoSubConsult);
      console.log(this.form);
    })
  }
}
