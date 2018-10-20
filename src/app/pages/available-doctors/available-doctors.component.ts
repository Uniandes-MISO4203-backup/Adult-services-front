import { Doctor } from './../../../models/doctor';
import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../../services/getInfo-services.service';
import { userModel } from '../../../models/userInfoResponseModel';

@Component({
  selector: 'app-available-doctors',
  templateUrl: './available-doctors.component.html',
  styleUrls: ['./available-doctors.component.css']
})
export class AvailableDoctorsComponent implements OnInit {

  doctors: userModel[];

  constructor(private getInfo: GetInfoService ) { 
    this.getDoctors()
  }

  ngOnInit() {
    
  }


  getDoctors(){
    this.getInfo.getAllDoctors().subscribe(
      data => {
        this.doctors = data;
    },error=>{
        console.log("Error en lista de doctores");
        console.log(error);
    });
  }

}
