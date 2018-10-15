export class Nurse {
 
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    resume: string;

    email: string;
    //Both the passwords are in a single object
    password: { 
      pwd: string;
      confirmPwd: string;
    };
    
    terms: boolean;
 
    constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
  }
 
}