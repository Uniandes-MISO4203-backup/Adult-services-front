import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SignInModel } from '../../../../models/signInModel';
import {Router} from "@angular/router";
import { SignInServiceService } from '../../../services/sign-in-service.service';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { patternValidator } from '../../../shared/pattern-validator';


@Component({
  selector: 'app-sign-in-component',
  templateUrl: './sign-in-component.component.html',
  styleUrls: ['./sign-in-component.component.css']
})
export class SignInComponentComponent implements OnInit {

  public user: SignInModel;

  loginForm: FormGroup;

  constructor(
    private signInService: SignInServiceService,
    private toastrService: ToastrService,
    private authGuardService: AuthGuardService,
    private router: Router
    ) {
   }

  ngOnInit() {
    this.createForm();
    //Create a new user object
    this.user = new SignInModel({
      email: "", password: "",
    });
  }

  private createForm() {
    this.loginForm = new FormGroup({
      // tslint:disable-next-line
      email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', Validators.required),
    });
  }


  log(object) {
    console.log(object);
  }

  onFormSubmit({ value }: { value: SignInModel}) {
    this.user = value;
    console.log( this.user);
    this.signInService.postAuth(this.user).subscribe(
      data => {
        var token = data.token;
        /*call here the token service*/
        this.login(this.user, token);
        console.log("Service response: " + token);
    },error=>{
      this.toastrService.error(error, "Error");
      console.log("service error: " + error);
    });

    
  }

  login(user: SignInModel, token: string) {
    this.signInService.getInfo(token).subscribe(data => {
      console.log("Service response in sigin: " + data.first_name + " rol: " + data.Role.name);
      //logIn the user
      this.authGuardService.loadUser(data);
      this.authGuardService.loadToken(token);
      this.authGuardService.activeSession();
      this.router.navigate(['/']);
      },error=>{
        this.toastrService.error(error, "Error");
        console.log("service error: " + error);
    });

    
    
}

}
