import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-interviews',
  templateUrl: './doctor-interviews.component.html',
  styleUrls: ['./doctor-interviews.component.css']
})
export class DoctorInterviewsComponent implements OnInit {

  interviews = [Number];

  constructor() { }

  ngOnInit() {
    console.log("DoctorInterviewsComponent init")
  }

}
