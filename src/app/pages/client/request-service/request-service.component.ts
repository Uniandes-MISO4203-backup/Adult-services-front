import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras  } from '@angular/router';
import { Router } from '@angular/router';
import { EnfermeroDis } from '../../../../models/EnfermerosDis';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { GetInfoService } from '../../../services/getInfo-services.service';
import { userModel } from '../../../../models/userInfoResponseModel';

@Component({
  selector: 'app-request-service',
  templateUrl: './request-service.component.html',
  styleUrls: ['./request-service.component.css']
})
export class RequestServiceComponent implements OnInit {

  adultId: string;  
  enfermerosDisponibles: EnfermeroDis[];
  loggedUser: userModel;
  watchComments: boolean;
  services: { start_date: Date, end_date: Date, nurse_evaluation: number, adult_comment: string, nurse_comment: string };  

  constructor(private router: Router, private activeRoute: ActivatedRoute,
    private getInfo: GetInfoService, private authGuardService: AuthGuardService) {      

      this.authGuardService.active$.subscribe(active => {
        console.log("Is active", active);
        if (active) {
          this.authGuardService.user$.subscribe(user => {   
            if (user != undefined){           
              this.loggedUser = user;
              if (user.first_name !== undefined ){
                this.activeRoute.params.subscribe( params =>{
                  this.adultId = params['id'];
                });
                this.getEnfermerosDisponibles();
              }
            }              
          });          
        }else {
          this.router.navigate(['/']);
        }
      });
  }

  ngOnInit() {
    this.watchComments = false;
  }

  getEnfermerosDisponibles(){
    this.getInfo.getEnfermerosDisponibles().subscribe(
      data => {
        console.log("Enfermeros disponibles: ");
        console.log(data);
        this.enfermerosDisponibles = data;
    },error=>{
        console.log("Error en getClinicHistories");
        console.log(error);
    });
  }

  getComments(id){
    this.watchComments = true;
    for (let enf of this.enfermerosDisponibles) {      
      if(enf.id == id ){        
        this.services = enf.Services;        
      }
    }
  }

}
