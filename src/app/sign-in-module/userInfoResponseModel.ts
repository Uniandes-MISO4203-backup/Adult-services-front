export class userInfoResponseModel {
 
    first_name: string;
    last_name: string;
    adult_birth_date: Date;
    adult_RH: string;
    is_approved: boolean;
    role: number;   
 
    constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
  }
 
}