import { userModel } from "./userInfoResponseModel";

export class ClinicalHistory {

  client:userModel;
  groupBlood:string;
  interViewDate:Date;
  lastDoctorName:string;
  lastDoctorPhone:string;
  actualsickness:string;
  medicalHistory:string;
  weight:number;
  size:number;
  pulse:string;
  heartRate:string;
  respiratoryfrequency:string;
  temperature:string;
  allergies:string;
  coronaryProblems:string;
  observations:string
  

    constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
  }
}