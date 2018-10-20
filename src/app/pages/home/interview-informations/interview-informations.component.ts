import { clinicHistoryModel } from './../../../../models/clinicHistoryResponseModel';
import { ClinicHistoriesService } from './../../../services/clinic-histories.service';
import { Component, OnInit, Input } from '@angular/core';
import { userModel } from '../../../../models/userInfoResponseModel';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthGuardService } from '../../../services/auth-guard.service';

@Component({
  selector: 'app-interview-informations',
  templateUrl: './interview-informations.component.html',
  styleUrls: ['./interview-informations.component.css']
})
export class InterviewInformationsComponent implements OnInit {

  loggedUser: userModel;
  clinicHistory: clinicHistoryModel;

  constructor(private clinicHistoriesService: ClinicHistoriesService,
    private authGuardService: AuthGuardService,
    private router: Router) {

    this.authGuardService.active$.subscribe(active => {
      console.log("Is active", active);
      if (active) {
        this.authGuardService.user$.subscribe(user => {
          if (user != undefined) {
            this.loggedUser = user;
            if (this.loggedUser.is_approved == false) {
              this.getUserClinicHistory()
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

  getUserClinicHistory() {
    return this.clinicHistoriesService.getClinicHistoryFor(this.loggedUser.id).subscribe(
      data => {
        console.log(this.clinicHistory)
        this.clinicHistory = data;
      }, error => {
        console.log("Error fetching interview informations");
        console.log(error);
      });

  }

}
