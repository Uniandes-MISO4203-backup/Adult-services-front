export class EnfermeroDis {
 
    id: number;
    first_name: string;
    last_name: string;
    nurse_evaluation_count: string;
    Services:{
      start_date: Date,
      end_date: Date,
      nurse_evaluation: number,
      adult_comment: string,
      nurse_comment: string
    }
 
    constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
  }
 
}