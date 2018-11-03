export class NewService {

  startDate:Date;
  endDate:Date;
  type:string;
  description:string;
  price:string;
  adultEvaluation:string;
  nurseEvaluation:string;
  adultId: string;
  nurseId: string;

  constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
  }
}