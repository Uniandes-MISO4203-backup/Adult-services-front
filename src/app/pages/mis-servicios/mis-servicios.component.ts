import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, NavigationExtras  } from '@angular/router';
import { Router } from '@angular/router';
import { EnfermeroDis } from '../../../models/EnfermerosDis';
import { AuthGuardService } from '../../services/auth-guard.service';
import { GetInfoService } from '../../services/getInfo-services.service';
import { userModel } from '../../../models/userInfoResponseModel';
import { MyService } from '../../../models/myServices';
import * as moment from 'moment';

@Component({
  selector: 'app-mis-servicios',
  templateUrl: './mis-servicios.component.html',
  styleUrls: ['./mis-servicios.component.css']
})
export class MisServiciosComponent implements OnInit {

  loggedUser: userModel;
  services: MyService[]; 

  constructor(private router: Router, private activeRoute: ActivatedRoute,
    private getInfo: GetInfoService, private authGuardService: AuthGuardService) {      

      this.authGuardService.active$.subscribe(active => {
        console.log("Is active", active);
        if (active) {
          this.authGuardService.user$.subscribe(user => {   
            if (user != undefined){           
              this.loggedUser = user;
              if (user.first_name !== undefined ){                
                this.getServicios();
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

  getServicios(){
    this.getInfo.getServicios(this.loggedUser.id).subscribe(
      data => {
        console.log("Servicios Generados: ");
        console.log(data);
        this.services = data;

        for (let service of this.services) {
          console.log(service.start_date)
          service.start_date = moment(service.start_date).locale('es').format('MMMM Do YYYY h:mm a')
          service.end_date = moment(service.end_date).locale('es').format('MMMM Do YYYY h:mm a')
        }

    },error=>{
        console.log("Error en Get Servicios");
        console.log(error);
    });
  }

}
