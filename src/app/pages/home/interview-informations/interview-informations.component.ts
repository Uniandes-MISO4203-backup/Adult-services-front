import { Component, OnInit, Input } from '@angular/core';
import { userModel } from '../../../../models/userInfoResponseModel';

@Component({
  selector: 'app-interview-informations',
  templateUrl: './interview-informations.component.html',
  styleUrls: ['./interview-informations.component.css']
})
export class InterviewInformationsComponent implements OnInit {

  @Input() loggedUser: userModel;

  constructor() { }

  ngOnInit() {
    if (this.loggedUser.is_approved == false) {
      
    }
  }

}
