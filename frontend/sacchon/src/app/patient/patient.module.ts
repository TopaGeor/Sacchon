import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';


@NgModule({
  declarations: [PatientComponent, PatientDataComponent, PatientDetailsComponent],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
