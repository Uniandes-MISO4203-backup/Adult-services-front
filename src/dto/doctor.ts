export class Doctor {
 
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    //resume: File;

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