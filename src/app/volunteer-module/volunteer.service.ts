import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Volunteer } from "./volunteer.model";


@Injectable({
    providedIn: 'root'
  })

export class VolunteerService {

getVolunteerFromServer(): Observable<Volunteer[]> {
    return this._http.get<Volunteer[]>("/api/Volunteer");
}

getVolunteerFromServerById(id: string): Observable<Volunteer> {
    return this._http.get<Volunteer>("/api/Volunteer/GetById/"+id);
}

saveUserAndDays(volunteer: Volunteer): Observable<boolean> 
{
    /////////זה ההפניה לשרת להשתמש בפונ' שבודקת תקינות ימים/////////
    return this._http.put<boolean>("/api/Volunteer", volunteer);
}

constructor(private _http: HttpClient) {
}

ngOnInit(){
}

}

