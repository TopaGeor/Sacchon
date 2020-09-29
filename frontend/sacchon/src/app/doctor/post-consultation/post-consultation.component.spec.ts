import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostConsultationComponent } from './post-consultation.component';

describe('PostConsultationComponent', () => {
  let component: PostConsultationComponent;
  let fixture: ComponentFixture<PostConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
