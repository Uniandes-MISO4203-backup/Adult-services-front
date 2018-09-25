import { Component, OnInit } from '@angular/core';
import { Nurse } from './nurse';

@Component({
  selector: 'app-nurse-registration',
  templateUrl: './nurse-registration.component.html',
  styleUrls: ['./nurse-registration.component.css']
})
export class NurseRegistrationComponent implements OnInit {

  public nurse: Nurse;

  ngOnInit() {
    //Create a new nurse object
   this.nurse = new Nurse({
      firstName: "", lastName: "", dateOfBirth: "",
      email: "", password: { pwd: "", confirm_pwd: "" },
      terms: false
    });
  }

  log(object) {
    console.log(object);
  }

  onFormSubmit({ value, valid }: { value: Nurse, valid: boolean }) {
    this.nurse = value;
    this.log(this.nurse)
  }

}
