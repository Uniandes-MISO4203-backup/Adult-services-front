import { Component, OnInit } from '@angular/core';
import { ClientRequestsService } from '../client-requests.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  clients: Observable<any[]>;
  columns: string[];

  constructor(private atService: ClientRequestsService) { }

  ngOnInit() {
    this.columns = this.atService.getColumns(); 
    //["firstName", "age"]
    this.clients = this.atService.getClients();
    //all data in mock-data.ts
  }

}
