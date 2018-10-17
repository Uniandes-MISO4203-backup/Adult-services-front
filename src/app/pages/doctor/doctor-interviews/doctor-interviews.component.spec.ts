import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorInterviewsComponent } from './doctor-interviews.component';

describe('DoctorInterviewsComponent', () => {
  let component: DoctorInterviewsComponent;
  let fixture: ComponentFixture<DoctorInterviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorInterviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorInterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
