export class AuthResponseModel {
 
    auth:boolean;
    token:string;   
 
    constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
  }
 
}