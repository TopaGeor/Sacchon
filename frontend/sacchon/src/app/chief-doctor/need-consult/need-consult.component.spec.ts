import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedConsultComponent } from './need-consult.component';

describe('NeedConsultComponent', () => {
  let component: NeedConsultComponent;
  let fixture: ComponentFixture<NeedConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
