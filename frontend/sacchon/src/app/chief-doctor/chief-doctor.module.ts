import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiefDoctorComponent } from './chief-doctor/chief-doctor.component';
import { InfoSubDataComponent } from './info-sub-data/info-sub-data.component';
import { InfoSubConsultComponent } from './info-sub-consult/info-sub-consult.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoActUserComponent } from './no-act-user/no-act-user.component';
import { NeedConsultComponent } from './need-consult/need-consult.component';



@NgModule({
  declarations: [
    ChiefDoctorComponent,
    InfoSubDataComponent,
    InfoSubConsultComponent,
    NoActUserComponent,
    NeedConsultComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ChiefDoctorModule { }
