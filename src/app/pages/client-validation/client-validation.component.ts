import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client';
import { AuthGuardService } from '../../services/auth-guard.service';
import { userModel } from '../../../models/userInfoResponseModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-validation',
  templateUrl: './client-validation.component.html',
  styleUrls: ['./client-validation.component.css']
})
export class ClientValidationComponent implements OnInit {

  clients: [Client];
  rol: string;
  user_name: string;
  loggedUser: userModel;

  constructor(private authGuardService: AuthGuardService, private router: Router) { 
    this.authGuardService.active$.subscribe(active => {
      console.log("Is active", active);
      if (active) {
        this.authGuardService.user$.subscribe(user => {   
          if (user != undefined){           
            this.loggedUser = user;
            if (user.first_name !== undefined ){
                this.user_name = user.first_name;
                if(user.Role.name == "doctor") this.rol = "Dr.";
            }
          }              
        });          
      }else {
        this.router.navigate(['/']);
    }
  });

  }

  ngOnInit() {
  }

}
