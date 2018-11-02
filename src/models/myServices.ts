export class MyService {

  id: number;
  start_date: string;
  end_date: string;
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