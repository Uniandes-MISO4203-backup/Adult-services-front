import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import { Observable, throwError } from 'rxjs';
import { clinicHistoryModel } from '../../models/clinicHistoryResponseModel';


import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;


@Injectable({
  providedIn: 'root'
})
export class ClinicHistoriesService {

  constructor(private http: HttpClient) {}


  getClinicHistoryFor(userId): Observable<clinicHistoryModel> {
    const httpOptions = {
      headers: new HttpHeaders({
      })};
    return this.http.get<clinicHistoryModel>(API_URL + "/clinicHistory/" + userId , httpOptions);
  }
}
