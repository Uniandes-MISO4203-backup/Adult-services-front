import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register-service.service';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from '../../../dto/doctor';


@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.css']
})
export class DoctorRegistrationComponent implements OnInit {

  public gender: string[];
  public user: Doctor;
  
  constructor(private registerService: RegisterService, private toastrService: ToastrService) {    
  }

  ngOnInit() {
    this.gender = ['Masculino', 'Femenino'];
    this.user = new Doctor({
      firstName: "", lastName: "", dateOfBirth: "",
      email: "", password: { pwd: "", confirm_pwd: "" },
      terms: false
    });
  }

  onFormSubmit({ value, valid }: { value: Doctor, valid: boolean }) {
    this.user = value;
    console.log(this.user);
    //Web Service
    this.registerService.postUserReg(this.user).subscribe(
      data => {
        console.log("DoctorRegService Response: " + data);
    },error=>{
        this.toastrService.error(error, "Error");
    });

  }

}
