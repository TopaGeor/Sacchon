import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSubConsultComponent } from './info-sub-consult.component';

describe('InfoSubConsultComponent', () => {
  let component: InfoSubConsultComponent;
  let fixture: ComponentFixture<InfoSubConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSubConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSubConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
