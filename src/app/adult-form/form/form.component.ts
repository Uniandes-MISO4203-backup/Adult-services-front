import { Component, OnInit } from '@angular/core';
// Import the User model
import { UserModel } from '../adultModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class AdultFormComponent implements OnInit {

    //Property for the gender
    private gender: string[];
    //Property for the user
    private user:UserModel;

  constructor() { }

  ngOnInit() {
    this.gender =  ['Male', 'Female', 'Others'];
    //Create a new user object
    this.user = new UserModel({ fullName: "", lastName:"", dateOfBirth:"",
        email:"", password: { pwd: "" , confirm_pwd: ""}, 
        gender: this.gender[0], terms: false});
  }

  log(object) {
  	console.log(object);
  }

   onFormSubmit({ value, valid}: { value: UserModel, valid: boolean }) {
    	this.user = value;
    	console.log( this.user);
    	console.log("valid: " + valid);
  	}

}
