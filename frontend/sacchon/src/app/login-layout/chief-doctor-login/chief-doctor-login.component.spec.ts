import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiefDoctorLoginComponent } from './chief-doctor-login.component';

describe('ChiefDoctorLoginComponent', () => {
  let component: ChiefDoctorLoginComponent;
  let fixture: ComponentFixture<ChiefDoctorLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiefDoctorLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiefDoctorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
