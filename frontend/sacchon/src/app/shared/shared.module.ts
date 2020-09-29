import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationsComponent } from './consultations/consultations.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [ConsultationsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ]
})
export class SharedModule { }
