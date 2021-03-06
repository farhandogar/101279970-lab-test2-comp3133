import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Spacexapi {

  private API = "https://api.spacexdata.com/v3/launches"

  constructor(private httpClient: HttpClient) {}

  public sendGetRequest(){
    return this.httpClient.get(this.API)
  }

}
