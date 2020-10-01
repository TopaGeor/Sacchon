import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChiefDoctorService } from '../chief-doctor.service';

@Component({
  selector: 'app-info-sub-data',
  templateUrl: './info-sub-data.component.html',
  styleUrls: ['./info-sub-data.component.scss']
})
export class InfoSubDataComponent implements OnInit {
  infoSubData;
  patientId = this.route.snapshot.paramMap.get("patientId");
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: ChiefDoctorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      patient_id: this.patientId,
      from: [null, Validators.required],
      to: [null, Validators.required],
    });
  }

  onSubmit() {
    this.service.infoSubData(this.form.value).subscribe(infoSubData => {
      this.infoSubData = infoSubData;
      console.log(infoSubData);
      console.log(this.form);
    })
  }
}
