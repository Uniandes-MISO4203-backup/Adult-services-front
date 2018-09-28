import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SignInModel } from '../signInModel';
import {Router} from "@angular/router";
import { SignInServiceService } from '../sign-in-service.service';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-sign-in-component',
  templateUrl: './sign-in-component.component.html',
  styleUrls: ['./sign-in-component.component.css']
})
export class SignInComponentComponent implements OnInit {

  public user: SignInModel;

  constructor(
    private signInService: SignInServiceService,
    private toastrService: ToastrService,
    private authGuardService: AuthGuardService,
    private router: Router
    ) {
   }

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
    this.signInService.postAuth(this.user).subscribe(
      data => {
        var token = data.token;
        /*call here the token service*/
        this.login(this.user, token);
        this.router.navigate(['/solicitudes']);
        console.log("Service response: " + token);
    },error=>{
      this.toastrService.error(error, "Error");
      console.log("service error: " + error);
    });

    
  }

  login(user: SignInModel, token: string) {
    this.signInService.getInfo(token).subscribe(data => {
      console.log("Service response: " + data.first_name);
      },error=>{
        this.toastrService.error(error, "Error");
        console.log("service error: " + error);
    });

    let userDto = {
      id: 1,
      firstName: user.email,
      lastName: "prueba"
    }
    this.authGuardService.activeSession();
    this.authGuardService.loadUser(userDto);
    this.authGuardService.loadToken(token);
}

}
