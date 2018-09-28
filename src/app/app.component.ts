import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from './services/auth-guard.service';
import { userModel } from '../dto/userInfoResponseModel';

/**
 * The app component. This component is the base of the BookStore
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    menus = [];

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;

    
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
    constructor(private authGuardService: AuthGuardService) {
        this.authGuardService.active$.subscribe(active => {
            console.log("Is active", active);
            if (active) {
                this.authGuardService.user$.subscribe(user => {
                    
                    this.loggedUser = user;

                    this.menus = [
                        {
                            id: "pendientes_aprobacion", name: "Usuarios pendientes", icon: "user", link: "solicitudes"
                        },
                        {
                            id: "usuario", name: user.first_name + " | " + user.Role.name, icon: "user", link: "solicitudes"
                        }
                    ];
                });
                
            } else {
                this.menus = [];
            }
        });
    }

    // login() {
    //     let user = {
    //         id: 1,
    //         firstName: "Servio Andres",
    //         lastName: "Pantoja Rosero"
    //     }
    //     this.authGuardService.activeSession();
    //     this.authGuardService.loadUser(user);
    //     this.authGuardService.loadToken("123ABC");
    // }

    logout() {
        this.authGuardService.logout();
    }


}





