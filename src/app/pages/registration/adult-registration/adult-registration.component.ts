import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../services/register-service.service';
import { ToastrService } from 'ngx-toastr';
import { Adult } from '../../../../models/adult';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adult-registration',
  templateUrl: './adult-registration.component.html',
  styleUrls: ['./adult-registration.component.css']
})
export class AdultRegistrationComponent implements OnInit {

  public gender: string[];
  public user: Adult;

  constructor(private registerService: RegisterService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.gender = ['Masculino', 'Femenino'];
    //Create a new user object
    this.user = new Adult({
      firstName: "", lastName: "", dateOfBirth: "",
      email: "", password: { pwd: "", confirm_pwd: "" },
      terms: false
    });
  }

  log(object) {
    console.log(object);
  }

  onFormSubmit({ value, valid }: { value: Adult, valid: boolean }) {
    this.user = value;
    console.log(this.user);
    //Web Service
    this.registerService.postAdultReg(this.user).subscribe(
      data => {
        console.log("Adult register response");
        console.log(data);
        this.toastrService.success("Inscripción realizada con éxito !", "Exito")
        this.router.navigate(['/']);
      }, error => {
        var text: string

        if (error.error.name == "Un usuario ya esta registrado con este correo") {
          text = "Un usuario ya esta registrado con este correo"
        }
        else {
          text = "Error en su inscripción, por favor verifica que sus datos son correctos."
        }
        this.toastrService.error(text, "Error");
      });
  }


}
