export class RequestService {

  date: Date;
  initHour:string;
  endHour:string;
  serviceType:string;
  constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
  }
  
}