import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientValidationComponent } from './client-validation.component';

describe('ClientValidationComponent', () => {
  let component: ClientValidationComponent;
  let fixture: ComponentFixture<ClientValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear', () => {
    expect(component).toBeTruthy();
  });
});
