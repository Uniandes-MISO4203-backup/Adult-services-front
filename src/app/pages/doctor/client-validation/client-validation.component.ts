import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../models/client';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { GetInfoService } from '../../../services/getInfo-services.service';
import { userModel } from '../../../../models/userInfoResponseModel';
import { Router } from '@angular/router';
import { ClinicalHistory } from '../../../../models/clinicalHistory';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client-validation',
  templateUrl: './client-validation.component.html',
  styleUrls: ['./client-validation.component.css']
})
export class ClientValidationComponent implements OnInit {

  rol: string;
  user_name: string;
  loggedUser: userModel;

  pendingUsers: userModel[];
  clinicHistories: ClinicalHistory[];

  constructor(private authGuardService: AuthGuardService, 
    private router: Router,
    private toastrService: ToastrService,
    private getInfo: GetInfoService ) { 

    this.authGuardService.active$.subscribe(active => {
      console.log("Is active", active);
      if (active) {
        this.authGuardService.user$.subscribe(user => {   
          if (user != undefined){           
            this.loggedUser = user;
            if (user.first_name !== undefined ){
                this.user_name = user.first_name;
                if(user.Role.name == "doctor") this.rol = "Dr.";
                if(user.Role.name == "nurse") this.rol = "Enfermer@";
                this.getUsers();
                this.getClinicHistories();
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

  getUsers(){
    this.getInfo.getPendingUsers().subscribe(
      data => {
        console.log("Usuarios pendientes: ");
        console.log(data);
        this.pendingUsers = data;
        if (this.pendingUsers.length == 0) {
          this.toastrService.info("No clientes pendientes de aprobación", "Info")
        }
    },error=>{
        this.toastrService.error("Error recuperando los clientes pendientes de validación", "Error")
        console.log("Error en usuarios pendientes");
        console.log(error);
    });
  }

  getClinicHistories(){
    this.getInfo.getClinicHistories().subscribe(
      data => {
        console.log("Historias Clinicas: ");
        console.log(data);
        this.clinicHistories = data;
    },error=>{
        console.log("Error en getClinicHistories");
        console.log(error);
    });
  }

  aprobar(id){
    this.cambiarEstado(id,"aprobado")
  }

  rechazar(id){
    this.cambiarEstado(id,"no aprobado")
  }

  programar(id){
    this.getInfo.changeStatus(id, "pendiente valoracion").subscribe(
      data => {
        console.log("Cambio de estado");
        console.log("Usuario Pendiente de valoración");  
        //Recargar la página... no funciona
        this.router.navigate(['']);    
    },error=>{
        this.toastrService.error("Error programando cita para el cliente", "Error")
        console.log("Error pendiente valoración");
        console.log(error);
    });
  }

  haveHistory(id): boolean{
    let _haveHistory = false
    for (let history of this.clinicHistories) {
      if(history.adultId == id){
        _haveHistory = true;
      }
    }
    return _haveHistory;
  }

  cambiarEstado(id,estado){
    this.getInfo.changeStatus(id, estado).subscribe(
      data => {
        console.log("Usuario " + estado);
        console.log(data);
        if (estado == "aprobado") {
          this.toastrService.success("Cliente aprobado con éxito", "Exito")
        } else if (estado == "no aprobado"){
          this.toastrService.success("Cliente rechazado con éxito", "Exito")
        }
        
        //Recargar la página... no funciona 
        this.router.navigate(['']);    
    },error=>{
        this.toastrService.error("Error cambiando el estado del cliente", "Error")
        console.log("Error cambiarEstado usuario");
        console.log(error);
    });
  }

}
