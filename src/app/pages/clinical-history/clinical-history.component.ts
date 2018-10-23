import { Component, OnInit } from '@angular/core';
import { ClinicalHistory } from '../../../models/clinicalHistory';
import { Client } from '../../../models/client';

@Component({
  selector: 'app-clinical-history',
  templateUrl: './clinical-history.component.html',
  styleUrls: ['./clinical-history.component.css']
})
export class ClinicalHistoryComponent implements OnInit {

  public clinicalHistory: ClinicalHistory;
  public groupBloods: string[];
  constructor() { }

  ngOnInit() {
    this.groupBloods = ["0+", "0-", "A+", "A-", "B+", "B-", "AB+", "AB-"];
    var clientUnknown: Client = new Client();
    clientUnknown.firstName = "--";
    clientUnknown.lastName = "--";
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
      temperature: "",
      allergies: "",
      coronaryProblems: "",
      observations: ""

    })
  }

  getFullNameClient():string{
    if(!this.clinicalHistory.client) return "name not found";
    return this.clinicalHistory.client.firstName+" "+this.clinicalHistory.client.lastName;
  }

  onFormSubmit({ value, valid }: { value: ClinicalHistory, valid: boolean }) {
    this.clinicalHistory = value;
    console.log(this.clinicalHistory);
   
  }

}
