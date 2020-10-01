import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoActUserComponent } from './no-act-user.component';

describe('NoActUserComponent', () => {
  let component: NoActUserComponent;
  let fixture: ComponentFixture<NoActUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoActUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoActUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
