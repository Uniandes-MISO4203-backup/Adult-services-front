import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthGuardService } from '../../services/auth-guard.service';
import { GetInfoService } from '../../services/getInfo-services.service';
import { RegisterService } from '../../services/register-service.service';


import { userModel } from '../../../models/userInfoResponseModel';
import { NewService } from '../../../models/serviceModel';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-solicitar-servicio',
  templateUrl: './solicitar-servicio.component.html',
  styleUrls: ['./solicitar-servicio.component.css']
})
export class SolicitarServicioComponent implements OnInit {

  service: NewService;
  loggedUser: userModel;
  nurseId: string;
  tipo: string[];

  constructor(private router: Router, private activeRoute: ActivatedRoute,
    private getInfo: GetInfoService, private authGuardService: AuthGuardService,
    private registerService: RegisterService, private toastrService: ToastrService,) {
      this.authGuardService.active$.subscribe(active => {
        console.log("Is active", active);
        if (active) {
          this.authGuardService.user$.subscribe(user => {   
            if (user != undefined){           
              this.loggedUser = user;
              if (user.first_name !== undefined ){
                this.activeRoute.params.subscribe( params =>{
                  this.nurseId = params['id'];
                });
              }
            }              
          });          
        }else {
          this.router.navigate(['/']);
        }
      });

    }

  ngOnInit() {
    this.tipo = ['Acompañamiento', 'Salida'];
    //Create a new user object
    this.service = new NewService({
      startDate: "", endDate: "", type: "",
      description: "", price: "", adultEvaluation: "",
      nurseEvaluation: "", adultId: "", nurseId: "",
    });
  }

  onFormSubmit({ value, valid }: { value: NewService, valid: boolean }) {
    this.service = value;
    this.service.adultId = this.loggedUser.id + "";
    this.service.nurseId = this.nurseId;
    switch(value.type) { 
      case this.tipo[0]: { 
         this.service.price = "50000";
         break; 
      } 
      case this.tipo[0]: { 
        this.service.price = "150000"; 
         break; 
      } 
      default: { 
        this.service.price = "5000";
         break; 
      } 
   } 
    console.log(this.service);
    //Web Service
    this.registerService.postServReg(this.service).subscribe(
      data => {
        console.log("Service create response");
        console.log(data);
        this.router.navigate(['/']);
      }, error => {
        var text: string
        switch (error.error.name) {
          case "SequelizeUniqueConstraintError": text = "Un servicio ya esta registrado"
          break;
          default: text = "Error en su inscripción, por favor verifica que sus datos son correctos."
        }
        this.toastrService.error(text, "Error");
      });
  }

}
