import { Injectable } from '@angular/core';

//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { CLIENTS } from './mock-data';

@Injectable()

@Injectable({
  providedIn: 'root'
})
export class ClientRequestsService {

  constructor() { }

  getClients(): Observable<any[]>{
    return Observable.of(CLIENTS).delay(100);
    
  }

  getColumns(): string[]{
    return ["firstName", "lastName", "requestDate", "age"]
  }

}
