export class MyService {

  id: number;
  start_date: Date;
  end_date: Date;
  type: string;
  description: string;
  estimated_price: number;
  adult_evaluation: number;
  nurse_evaluation: number;
  adultId: number;
  nurseId: number;
  serviceStatusId: number;

  constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
  }
}