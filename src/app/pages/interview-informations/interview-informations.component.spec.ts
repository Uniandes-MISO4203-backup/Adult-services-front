import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewInformationsComponent } from './interview-informations.component';

describe('InterviewInformationsComponent', () => {
  let component: InterviewInformationsComponent;
  let fixture: ComponentFixture<InterviewInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
