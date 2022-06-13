import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Volunteer } from '../volunteer-module/volunteer.model';

@Injectable({
  providedIn: 'root'
})
export class SchedulingServiceService {

  constructor(private _http: HttpClient) { }


  getVoluteersForScheduling(): Observable<Volunteer[][]> {
    return this._http.get<Volunteer[][]>("/api/Scheduling");

  }
  getScheduling() : Observable<string[]>{
    return this._http.get<string[]>("/api/Scheduling/GetScheduling");
  }

  saveSchedulingFromServer(scheduling:string[]) : Observable<boolean>{
     return this._http.put<boolean>("/api/Scheduling",scheduling);
  }

}
