import { roleModel } from './roleModel';
import { statusModel } from './clientStatus';

export class userModel {
    id:number;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    adult_birth_date: Date;
    adult_RH: string;
    is_approved: boolean;
    Role: roleModel;
    clientStatusId: number; 
    rejectClientExplains:String; 
 
    constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
  }
 
}