import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PatientModule } from './patient/patient.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { DoctorModule } from './doctor/doctor.module';
// import { SharedModule } from './shared/shared.module';
// import { ChiefDoctorComponent } from './chief-doctor/chief-doctor/chief-doctor.component';
import { ChiefDoctorModule } from './chief-doctor/chief-doctor.module';
import { LoginLayoutModule } from './login-layout/login-layout.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    PatientModule,
    HttpClientModule,
    DoctorModule,
    ChiefDoctorModule,
    LoginLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
