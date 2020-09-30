import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePatientDataComponent } from './delete-patient-data.component';

describe('DeletePatientDataComponent', () => {
  let component: DeletePatientDataComponent;
  let fixture: ComponentFixture<DeletePatientDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePatientDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePatientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
