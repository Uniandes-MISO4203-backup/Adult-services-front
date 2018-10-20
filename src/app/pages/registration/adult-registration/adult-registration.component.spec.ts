import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultRegistrationComponent } from './adult-registration.component';

describe('AdultRegistrationComponent', () => {
  let component: AdultRegistrationComponent;
  let fixture: ComponentFixture<AdultRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdultRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe registrar', () => {
    expect(component).toBeTruthy();
  });
});
