import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register-service.service';
import { ToastrService } from 'ngx-toastr';
import { userModel } from '../../../dto/userInfoResponseModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class AdultFormComponent implements OnInit {

  public gender: string[];
  public user: userModel;

  constructor(private registerService: RegisterService, private toastrService: ToastrService) {    
  }

  ngOnInit() {
    this.gender = ['Masculino', 'Femenino'];
    //Create a new user object
    this.user = new userModel();
  }

  log(object) {
    console.log(object);
  }

  onFormSubmit({ value, valid }: { value: userModel, valid: boolean }) {
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
