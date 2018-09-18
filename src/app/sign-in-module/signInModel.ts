export class SignInModel {
 
    email:string;
    password:string;   
 
    constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
  }
 
}