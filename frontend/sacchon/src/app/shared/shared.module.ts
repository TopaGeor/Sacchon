import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationsComponent } from './consultations/consultations.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ConsultationsComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
