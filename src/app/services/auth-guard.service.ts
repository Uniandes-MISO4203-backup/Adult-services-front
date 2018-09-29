import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDto } from '../../dto/user-dto';
import { userModel } from '../../dto/userInfoResponseModel';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SignInServiceService } from '../sign-in-module/sign-in-service.service';
const API_URL = environment.apiURL;

@Injectable()
export class AuthGuardService {

  user$ = new BehaviorSubject(new userModel);
  active$ = new BehaviorSubject(false);
  token;

  constructor(private http: HttpClient, private signInService: SignInServiceService,) {
    console.log("Loading session");
    this.token = localStorage.getItem("adult-services-token");
    console.log("User token", this.token);
  }

  public loadSession() {
    console.log("Loading session 2");
    return new Promise(async (resolve, reject) => {
      let adultServicesUser = localStorage.getItem("adult-services-user");
      if (adultServicesUser !== null) {
        this.signInService.getInfo(this.token).subscribe(data => {
          console.log("Service response load session: " + data.first_name + " rol: " + data.Role.name);
          this.active$.next(true);
          this.user$.next(data);
        });
      }
      resolve(true);
    });
  }

  public activeSession() {
    this.active$.next(true);
  }
  public loadUser(user: userModel) {
    console.log("user " + user.first_name + " rol: " + user.Role.name);
    localStorage.setItem("adult-services-user", user.id.toString());
    this.user$.next(user);
  }

  public logout() {
    this.user$.next(undefined);
    this.active$.next(false);
    localStorage.removeItem("adult-services-token");
    localStorage.removeItem("adult-services-user");
  }

  public loadToken(token: string) {
    localStorage.setItem("adult-services-token", token);
  }

}
