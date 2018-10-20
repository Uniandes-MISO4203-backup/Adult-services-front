import { Component, OnInit } from '@angular/core';
import { ClinicalHistory } from '../../../../models/clinicalHistory';
import { RegisterService } from '../../../services/register-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { userModel } from '../../../../models/userInfoResponseModel';

@Component({
  selector: 'app-clinical-history',
  templateUrl: './clinical-history.component.html',
  styleUrls: ['./clinical-history.component.css']
})
export class ClinicalHistoryComponent implements OnInit {

  public clinicalHistory: ClinicalHistory;
  public groupBloods: string[];
  clientUnknown: userModel = new userModel();
  
  constructor(private registerService: RegisterService,
    private toastrService: ToastrService,
    private router: Router) {  }

  ngOnInit() {
    this.groupBloods = ["0+", "0-", "A+", "A-", "B+", "B-", "AB+", "AB-"];    
    this.clientUnknown.first_name = "--";
    this.clientUnknown.last_name = "--";
    this.clinicalHistory = new ClinicalHistory({
      adultId: this.clientUnknown.id,
      groupBlood: "0+",
      interViewDate: new Date(),
      lastDoctorName: "",
      lastDoctorPhone: "",
      actualsickness: "",
      medicalHistory: "",
      weight: 70,
      size: 180,
      pulse: "",
      respiratoryfrequency: "",
      heartRate: "",
      temperature: "",
      allergies: "",
      coronaryProblems: "",
      observations: ""

    })
  }

  getFullNameClient():String{
    if(this.clientUnknown.first_name == null) return "name not found";
    return this.clientUnknown.first_name+" "+this.clientUnknown.last_name;
  }

  onFormSubmit({ value, valid }: { value: ClinicalHistory, valid: boolean }) {
    this.clinicalHistory = value;
    console.log(this.clinicalHistory);
    //Web Service
    this.registerService.postHistotiesReg(this.clinicalHistory).subscribe(
      data => {
        console.log("Clinic Histories response");
        console.log(data);
        this.router.navigate(['/solicitudes']);
    },error=>{
        this.toastrService.error(error.toString(), "Error");
    });

  }

}
