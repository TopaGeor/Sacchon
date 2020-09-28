import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDataDetailComponent } from './patient-data-detail.component';

describe('PatientDataDetailComponent', () => {
  let component: PatientDataDetailComponent;
  let fixture: ComponentFixture<PatientDataDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDataDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDataDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
