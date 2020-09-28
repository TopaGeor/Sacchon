import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from "./components/components.module";
import { AppComponent } from './app.component';
import { AuthPageComponent } from './layouts/auth-page/auth-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PatientModule } from './patient/patient.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    PatientModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
