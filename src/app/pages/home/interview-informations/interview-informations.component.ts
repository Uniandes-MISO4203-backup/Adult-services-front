import { clinicHistoryModel } from './../../../../models/clinicHistoryResponseModel';
import { ClinicHistoriesService } from './../../../services/clinic-histories.service';
import { Component, OnInit, Input } from '@angular/core';
import { userModel } from '../../../../models/userInfoResponseModel';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthGuardService } from '../../../services/auth-guard.service';
import * as moment from 'moment';


@Component({
  selector: 'app-interview-informations',
  templateUrl: './interview-informations.component.html',
  styleUrls: ['./interview-informations.component.css']
})
export class InterviewInformationsComponent implements OnInit {
  
  loggedUser: userModel;
  interviewDate: string
  day: string
  hour: string

  months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio","agosto", "septiembre", "octubre", "noviembre", "diciembre" ]

  constructor(private clinicHistoriesService: ClinicHistoriesService,
    private authGuardService: AuthGuardService,
    private router: Router) {

    this.authGuardService.active$.subscribe(active => {
      console.log("Is active", active);
      if (active) {
        this.authGuardService.user$.subscribe(user => {
          if (user != undefined) {
            this.loggedUser = user;
            console.log("Testing State: " + this.loggedUser.clientStatusId);;
            if (!this.loggedUser.is_approved) {
             this.getUserInterviewDate()
            }
          }
        });
      } else {
        this.router.navigate(['/']);
      }
    });

  }

  ngOnInit() {

  }

  getUserInterviewDate() {
    return this.clinicHistoriesService.getInterviewDateFor(this.loggedUser.id).subscribe(
      data => {  
        this.interviewDate = moment(data).format('MMMM Do YYYY h:mm a')
        this.day = moment(data).locale("es").format("MMM Do YYYY");
        this.hour = moment(data).format("h:mm a");
      }, error => {
        console.log("Error fetching interview informations");
        console.log(error);
      });
  }

  solicitar(id){
    this.router.navigate(['/solicitar-servicio/' + id]);
  }
  
}