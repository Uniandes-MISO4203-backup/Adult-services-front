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
  temperature: number;
  observations:string
  allergies:string;
  coronary_problems:string;
  medical_precedings:string;
  adultId: number;
  doctorId: number;

  constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
  }
}