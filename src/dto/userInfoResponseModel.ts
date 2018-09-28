import { roleModel } from './roleModel';

export class userModel {
    id:number;
    first_name: string;
    last_name: string;
    adult_birth_date: Date;
    adult_RH: string;
    is_approved: boolean;
    Role: roleModel;   
 
    constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
  }
 
}