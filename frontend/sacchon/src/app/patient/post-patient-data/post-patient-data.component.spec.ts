import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPatientDataComponent } from './post-patient-data.component';

describe('PostPatientDataComponent', () => {
  let component: PostPatientDataComponent;
  let fixture: ComponentFixture<PostPatientDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPatientDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPatientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
