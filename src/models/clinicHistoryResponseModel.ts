export class clinicHistoryModel {

  actual_diagnossis: string
  adultId: number
  allergies: string
  coronary_problems: string
  createdAt: Date
  doctorId: number
  heart_rate: number
  height: number
  id: number
  interview_date: Date
  medical_precedings: string
  observations: string
  pulse: number
  regular_doctor_name: string
  regular_doctor_phone: number
  temperature: number
  updatedAt: Date
  weight: number
 
  constructor(values: Object = {}) {
    //Constructor initialization
    Object.assign(this, values);
  }
 
}