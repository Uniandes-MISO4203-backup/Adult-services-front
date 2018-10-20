import { Component, OnInit } from '@angular/core';
import { Nurse } from './nurse';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../../../services/register-service.service';

@Component({
  selector: 'app-nurse-registration',
  templateUrl: './nurse-registration.component.html',
  styleUrls: ['./nurse-registration.component.css']
})
export class NurseRegistrationComponent implements OnInit {

  public gender: string[];
  public user: Nurse;

  constructor(private registerService: RegisterService,
    private toastrService: ToastrService,
    private router: Router) {  }

  ngOnInit() {
    this.gender = ['Masculino', 'Femenino'];
    this.user = new Nurse({
      firstName: "", lastName: "", dateOfBirth: "",
      email: "", password: { pwd: "", confirm_pwd: "" }, 
      resume:"", terms: false
    });
  }

  log(object) {
    console.log(object);
  }

  onFormSubmit({ value, valid }: { value: Nurse, valid: boolean }) {
    this.user = value;
    console.log(this.user);
    //Web Service
    this.registerService.postNurseReg(this.user).subscribe(
      data => {
        console.log("Nurse register response");
        console.log(data);
        this.router.navigate(['/solicitudes']);
    },error=>{
        this.toastrService.error(error.toString(), "Error");
    });
  }

}
