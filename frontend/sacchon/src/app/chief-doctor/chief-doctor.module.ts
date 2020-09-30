import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiefDoctorComponent } from './chief-doctor/chief-doctor.component';
import { InfoSubDataComponent } from './info-sub-data/info-sub-data.component';
import { InfoSubConsultComponent } from './info-sub-consult/info-sub-consult.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChiefDoctorComponent,
    InfoSubDataComponent,
    InfoSubConsultComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ChiefDoctorModule { }
