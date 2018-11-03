import { userModel } from "./userInfoResponseModel";

export class ClinicalHistory {

  id: number;
  interview_date:Date;
  regular_doctor_name:string;
  regular_doctor_phone:string;
  actual_diagnossis:string;
  weight:number;
  height:number;
  pulse:number;
  heart_rate: number;
  breathing_rate:number;
  temperature: number;
  observations:string
  allergies:Array<string>=["",""];
  coronary_problems:Array<string>=[""];
  medical_precedings:Array<string>=["",""];
  adultId: number;
  doctorId: number;
  size: number;
  groupBlood: string;

  constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
  }
}