import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register-service.service';
import { ToastrService } from 'ngx-toastr';
import { Adult } from '../../../models/adult';
@Component({
  selector: 'app-adult-registration',
  templateUrl: './adult-registration.component.html',
  styleUrls: ['./adult-registration.component.css']
})
export class AdultRegistrationComponent implements OnInit {

 
  public gender: string[];
  public user: Adult;

  constructor(private registerService: RegisterService, private toastrService: ToastrService) {    
  }

  ngOnInit() {
    this.gender = ['Masculino', 'Femenino'];
    //Create a new user object
    this.user = new Adult({
      firstName: "", lastName: "", dateOfBirth: "",
      email: "", password: { pwd: "", confirm_pwd: "" },
      terms: false
    });
  }

  log(object) {
    console.log(object);
  }

  onFormSubmit({ value, valid }: { value: Adult, valid: boolean }) {
    this.user = value;
    //Web Service
    this.registerService.postUserReg(this.user).subscribe(
      data => {
        var user = data;
        console.log("registerService response: " + user);
    },error=>{
      this.toastrService.error(error, "Error");
    });

  }


}
