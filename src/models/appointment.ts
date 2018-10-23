import { Adult } from './adult';
export class Appointment {
     
    interview_date: string;
    adult: MinAdult;
    
    constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
  }
 
}

export class MinAdult {
     
    first_name: string;
    last_name: string;
    
    constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
  }
 
}