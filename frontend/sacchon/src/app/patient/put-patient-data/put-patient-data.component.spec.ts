import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutPatientDataComponent } from './put-patient-data.component';

describe('PutPatientDataComponent', () => {
  let component: PutPatientDataComponent;
  let fixture: ComponentFixture<PutPatientDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutPatientDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutPatientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
