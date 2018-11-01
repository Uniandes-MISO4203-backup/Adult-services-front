import { Component, OnInit } from '@angular/core';
import { Nurse } from './nurse';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../../../services/register-service.service';

@Component({
  selector: 'app-nurse-registration',
  templateUrl: './nurse-registration.component.html',
  styleUrls: ['./nurse-registration.component.css']
})
export class NurseRegistrationComponent implements OnInit {

  public gender: string[];
  public user: Nurse;

  constructor(private registerService: RegisterService,
    private toastrService: ToastrService,
    private router: Router) {  }

  ngOnInit() {
    this.gender = ['Masculino', 'Femenino'];
    this.user = new Nurse({
      firstName: "", lastName: "", dateOfBirth: "",
      email: "", password: { pwd: "", confirm_pwd: "" }, 
      resume:"", terms: false
    });
  }

  log(object) {
    console.log(object);
  }

  onFormSubmit({ value, valid }: { value: Nurse, valid: boolean }) {
    this.user = value;
    console.log(this.user);
    //Web Service
    this.registerService.postNurseReg(this.user).subscribe(
      data => {
        console.log("Nurse register response");
        console.log(data);
        this.toastrService.success("Inscripción realizada con éxito !", "Exito")
        this.router.navigate(['/solicitudes']);
    },error=>{
      var text: string
      switch (error.error.name) {
        case "SequelizeUniqueConstraintError": text = "Un usuario ya esta registrado con este correo"
        break;
        default: text = "Error en su inscripción, por favor verifica que sus datos son correctos."
      }
      this.toastrService.error(text, "Error");
    });
  }

}
