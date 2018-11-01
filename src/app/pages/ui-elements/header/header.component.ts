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
    title: string;


    loggedUser: userModel;
    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "Adult Services";
    }

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
                                //{
                                //    id: "historia_clinica", name: "Historia Clinica", icon: "user", link: "clinicalHistory"
                                //},

                                //{
                                //    id: "usuario", name: " Rol: "+ user.Role.name, icon: "user", link: "solicitudes"
                                //}
                            ];
                        } else if (this.loggedUser.Role.name == "adult" && this.loggedUser.clientStatusId == 3 ) {
                            this.menus = [
                                {
                                    id: "ver-servicios", name: "Mis servicios", icon: "user", link: ""
                                }
                            ]
                            
                        } else {
                            
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
