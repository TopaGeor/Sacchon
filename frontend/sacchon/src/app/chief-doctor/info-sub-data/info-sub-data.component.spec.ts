import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSubDataComponent } from './info-sub-data.component';

describe('InfoSubDataComponent', () => {
  let component: InfoSubDataComponent;
  let fixture: ComponentFixture<InfoSubDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSubDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSubDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
