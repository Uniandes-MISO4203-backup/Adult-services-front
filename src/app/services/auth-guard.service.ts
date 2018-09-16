import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDto } from '../../dto/user-dto';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;

@Injectable()
export class AuthGuardService {

  user$ = new BehaviorSubject(undefined);
  active$ = new BehaviorSubject(false);
  token;

  constructor(private http: HttpClient) {
    console.log("Loading session");
    this.token = localStorage.getItem("adult-services-token");
    console.log("User token", this.token);
  }

  public loadSession() {
    return new Promise(async (resolve, reject) => {
      let adultServicesUser = localStorage.getItem("adult-services-user");
      if (adultServicesUser !== null) {
        let user = await this.http.get(API_URL + "/users/" + adultServicesUser).toPromise();
        this.active$.next(true);
        this.user$.next(user);
      }
      resolve(true);
    });
  }

  public activeSession() {
    this.active$.next(true);
  }
  public loadUser(user: UserDto) {
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
