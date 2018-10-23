import { userModel } from './../../../../models/userInfoResponseModel';
import { AuthGuardService } from './../../../services/auth-guard.service';
import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../../../models/appointment';
import { ClinicHistoriesService } from '../../../services/clinic-histories.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-upcoming-interviews',
  templateUrl: './upcoming-interviews.component.html',
  styleUrls: ['./upcoming-interviews.component.css']
})
export class UpcomingInterviewsComponent implements OnInit {

  appointments: Appointment[]
  loggedUser: userModel

  constructor(private clinicHistoriesService: ClinicHistoriesService,
    private authGuardService: AuthGuardService,
    private router: Router) {

    this.authGuardService.active$.subscribe(active => {
      console.log("Is active", active);
      if (active) {
        this.authGuardService.user$.subscribe(user => {
          if (user != undefined) {
            this.loggedUser = user;
            this.getDoctorInterviews()
          }
        });
      } else {
        this.router.navigate(['/']);
      }
    });

  }

  ngOnInit() {
  }


  getDoctorInterviews() {
    return this.clinicHistoriesService.getInterviewsForDoctor(this.loggedUser.id).subscribe(
      data => {
        console.log(data)
        this.appointments = data
        for (var appointment of this.appointments) {
          console.log(appointment)
          appointment.interview_date = moment(appointment.interview_date).locale("es").format('D MMMM YYYY h:mm a')
        }
      }, error => {
        console.log("Error fetching interviews for doctor");
        console.log(error);
      });

  }
}

