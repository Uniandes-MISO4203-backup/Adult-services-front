import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../services/auth-guard.service';
import { userModel } from '../../../models/userInfoResponseModel';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  template: `
  <app-interview-informations [loggedUser]="loggedUser"></app-interview-informations>
  `,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  active = true;
  
  loggedUser: userModel;

  /**
     * @ignore
     */
    constructor(private authGuardService: AuthGuardService, private router: Router) {        
        this.authGuardService.active$.subscribe(active => {
            console.log("Is active", active);
            if (active) {
                this.active = true;
                this.router.navigate(['/solicitudes']);
                this.authGuardService.user$.subscribe(user => {
                    if (user != undefined){
                        this.loggedUser = user;
                    }                    
                });
                
            } else {
                this.active = false;
                this.router.navigate(['/']);
            }
        });
    }

  ngOnInit() {
    //DEBUG 
    //this.loggedUser = new userModel()
   //this.loggedUser.first_name = "Thomas"
  }

}
