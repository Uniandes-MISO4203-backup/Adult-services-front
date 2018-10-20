import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { userModel } from '../../../../models/userInfoResponseModel';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    menus = [];
    active = false;

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;


<<<<<<< HEAD
  /**
   * @ignore
   */
  constructor(private authGuardService: AuthGuardService, private router: Router) {        
      this.authGuardService.active$.subscribe(active => {
          console.log("Is active", active);
          if (active) {
              this.active = true;
              this.router.navigate(['/solicitudes']);
              this.authGuardService.user$.subscribe(user => {
                  if (user != undefined){
                      this.loggedUser = user;
                      if (user.first_name !== undefined ){
                          this.menus = [
                              //{
                              //    id: "historia_clinica", name: "Historia Clinica", icon: "user", link: "clinicalHistory"
                              //}
                              //{
                              //    id: "usuario", name: " Rol: "+ user.Role.name, icon: "user", link: "solicitudes"
                              //}
                          ];
                      }
                  }                    
              });
              
          } else {
              this.active = false;
              this.router.navigate(['/']);
          }
      });
  }
=======
    loggedUser: userModel;
    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "Adult Services";
    }
>>>>>>> fefc960dadf65294dc3c26af6a7a92962aaae41b

    /**
     * @ignore
     */
    constructor(private authGuardService: AuthGuardService, private router: Router) {
        this.authGuardService.active$.subscribe(active => {
            console.log("Is active", active);
            if (active) {
                this.active = true;
                this.router.navigate(['/solicitudes']);
                this.authGuardService.user$.subscribe(user => {
                    if (user != undefined && user.Role != undefined) {
                        this.loggedUser = user;
                        if (this.loggedUser.Role.name == "doctor") {
                            this.menus = [
                                {
                                    id: "citas", name: "mis citas", icon: "user", link: "citas"
                                },
                                {
                                    id: "historia_clinica", name: "Historia Clinica", icon: "user", link: "clinicalHistory"
                                },

                                //{
                                //    id: "usuario", name: " Rol: "+ user.Role.name, icon: "user", link: "solicitudes"
                                //}
                            ];
                        } else if (this.loggedUser.Role.name == "adult" && this.loggedUser.is_approved == true) {
                            this.menus = [
                                {
                                    id: "request-service", name: "Solicitar un servicio", icon: "user", link: "solicitar-servicio"
                                },
                            ]
                        }
                    }
                });

            } else {
                this.active = false;
                this.router.navigate(['/']);
            }
        });
    }

    logout() {
        this.authGuardService.logout();
    }


}
