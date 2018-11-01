import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../../../models/requestService';

@Component({
  selector: 'app-request-service',
  templateUrl: './request-service.component.html',
  styleUrls: ['./request-service.component.css']
})
export class RequestServiceComponent implements OnInit {
  public requestService: RequestService;
  public servicesType:Array<string>;

  adultId: string;  
  enfermerosDisponibles: EnfermeroDis[];
  loggedUser: userModel;
  watchComments: boolean;
  services: { start_date: Date, end_date: Date, nurse_evaluation: number, adult_comment: string, nurse_comment: string };  

  constructor(private router: Router, private activeRoute: ActivatedRoute,
    private getInfo: GetInfoService, private authGuardService: AuthGuardService) {      

      this.authGuardService.active$.subscribe(active => {
        console.log("Is active", active);
        if (active) {
          this.authGuardService.user$.subscribe(user => {   
            if (user != undefined){           
              this.loggedUser = user;
              if (user.first_name !== undefined ){
                this.activeRoute.params.subscribe( params =>{
                  this.adultId = params['id'];
                });
                this.getEnfermerosDisponibles();
              }
            }              
          });          
        }else {
          this.router.navigate(['/']);
        }
      });
  }

  ngOnInit() {

    this.servicesType=["servicio 1","servicio 2","servicio 3"];
    this.requestService= new RequestService();

  }

  onFormSubmit({ value, valid }: { value: RequestService, valid: boolean }) {
    this.requestService = value;
    console.log(this.requestService);
  }
  
}
