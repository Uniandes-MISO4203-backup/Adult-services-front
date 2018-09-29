import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from './services/auth-guard.service';
import { userModel } from '../dto/userInfoResponseModel';
import { Router } from '@angular/router';

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
    active = false;    

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
                                //    id: "pendientes_aprobacion", name: "Usuarios pendientes", icon: "user", link: "solicitudes"
                                //},
                                //{
                                //    id: "usuario", name: " Rol: "+ user.Role.name, icon: "user", link: "solicitudes"
                                //}
                            ];
                        }
                    }                    
                });
                
            } else {
                this.router.navigate(['/']);
            }
        });
    }

    logout() {
        this.authGuardService.logout();
    }


}





