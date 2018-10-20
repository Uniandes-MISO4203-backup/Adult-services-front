import { Component, OnInit } from '@angular/core';
import { ClinicalHistory } from '../../../models/clinicalHistory';
import { RegisterService } from '../../services/register-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { userModel } from '../../../models/userInfoResponseModel';

@Component({
  selector: 'app-clinical-history',
  templateUrl: './clinical-history.component.html',
  styleUrls: ['./clinical-history.component.css']
})
export class ClinicalHistoryComponent implements OnInit {

  public clinicalHistory: ClinicalHistory;
  public groupBloods: string[];
  
  constructor(private registerService: RegisterService,
    private toastrService: ToastrService,
    private router: Router) {  }

  ngOnInit() {
    this.groupBloods = ["0+", "0-", "A+", "A-", "B+", "B-", "AB+", "AB-"];
    var clientUnknown: userModel = new userModel();
    clientUnknown.first_name = "--";
    clientUnknown.last_name = "--";
    this.clinicalHistory = new ClinicalHistory({
      client: clientUnknown,
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
    if(!this.clinicalHistory.client) return "name not found";
    return this.clinicalHistory.client.first_name+" "+this.clinicalHistory.client.last_name;
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
