import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutConsultationComponent } from './put-consultation.component';

describe('PutConsultationComponent', () => {
  let component: PutConsultationComponent;
  let fixture: ComponentFixture<PutConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
