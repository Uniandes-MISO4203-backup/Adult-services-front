import { Component, OnInit } from '@angular/core';
import { SignInModel } from '../signInModel';

@Component({
  selector: 'app-sign-in-component',
  templateUrl: './sign-in-component.component.html',
  styleUrls: ['./sign-in-component.component.css']
})
export class SignInComponentComponent implements OnInit {

  public user: SignInModel;

  constructor() { }

  ngOnInit() {
    //Create a new user object
    this.user = new SignInModel({
      email: "", password: "",
    });
  }

  log(object) {
    console.log(object);
  }

  onFormSubmit({ value, valid }: { value: SignInModel, valid: boolean }) {
    this.user = value;
    console.log( this.user);
    console.log("valid: " + valid);
  }

}
