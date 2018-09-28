import { Component, OnInit } from '@angular/core';
import { Doctor } from './doctor';
import { Client } from './client';

@Component({
  selector: 'app-client-validation',
  templateUrl: './client-validation.component.html',
  styleUrls: ['./client-validation.component.css']
})
export class ClientValidationComponent implements OnInit {

  doctor: Doctor;
  clients: [Client];

  constructor() { }

  ngOnInit() {
    this.doctor = new Doctor();
    this.doctor.name = 'Jose';
  }

}
