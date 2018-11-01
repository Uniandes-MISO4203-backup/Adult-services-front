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

  constructor() { }

  ngOnInit() {
    this.servicesType=["servicio 1","servicio 2","servicio 3"];
    this.requestService= new RequestService();
  }

  onFormSubmit({ value, valid }: { value: RequestService, valid: boolean }) {
    this.requestService = value;
    console.log(this.requestService);

}
