import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { PostConsultationComponent } from './post-consultation/post-consultation.component';
import { DeleteDoctorComponent } from './delete-doctor/delete-doctor.component';



@NgModule({
  declarations: [DoctorComponent, DoctorDetailsComponent, PostConsultationComponent, DeleteDoctorComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
