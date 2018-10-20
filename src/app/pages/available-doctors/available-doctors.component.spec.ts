import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableDoctorsComponent } from './available-doctors.component';

describe('AvailableDoctorsComponent', () => {
  let component: AvailableDoctorsComponent;
  let fixture: ComponentFixture<AvailableDoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableDoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
