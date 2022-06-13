import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output }
 from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Volunteer } from '../volunteer.model';
import { VolunteerService } from '../volunteer.service';

@Component({
  selector: 'app-volunteer-details-component',
  templateUrl: './volunteer-details-component.component.html',
  styleUrls: ['./volunteer-details-component.component.css']
})

export class VolunteerDetailsComponentComponent implements OnInit {
  VolunteerId:number=0;
  _Volunteer: Volunteer = new Volunteer();
  volunteers:Volunteer=new Volunteer();

  volunteerForm: FormGroup = new FormGroup({
    "name": new FormControl(this._Volunteer.name, [Validators.required, Validators.minLength(3)]),
    "id": new FormControl(this._Volunteer.id, Validators.required),
    "age": new FormControl(this._Volunteer.age),
    "sunday": new FormControl(""),
    "monday": new FormControl(""),
    "tuesday": new FormControl(""),
    "wensday": new FormControl(""),
    "thursday": new FormControl(""),
    "friday": new FormControl("")
});
  
  get volunteer(){
    return this._Volunteer;
  }
  
  // @Input() 
  set volunteer(vol: Volunteer) {
    this._Volunteer = vol;
    if (this.volunteer) {
      this.volunteerForm.controls["name"].setValue(vol.name);
      this.volunteerForm.controls["age"].setValue(vol.age);
      this.volunteerForm.controls["id"].setValue(vol.id);
      this.volunteerForm.controls["sunday"].setValue(vol.days[0]);
      this.volunteerForm.controls["monday"].setValue(vol.days[1]);
      this.volunteerForm.controls["tuesday"].setValue(vol.days[2]);
      this.volunteerForm.controls["wensday"].setValue(vol.days[3]);
      this.volunteerForm.controls["thursday"].setValue(vol.days[4]);
      this.volunteerForm.controls["friday"].setValue(vol.days[5]);
    }
  }

  saveVolunteer(){
    this._Volunteer.name=this.volunteerForm.value.name;
    this._Volunteer.age=this.volunteerForm.value.age;
    this._Volunteer.id=this.volunteerForm.value.id;
    this._Volunteer.days[0]=this.volunteerForm.value.sunday;
    this._Volunteer.days[1]=this.volunteerForm.value.monday;
    this._Volunteer.days[2]=this.volunteerForm.value.tuesday;
    this._Volunteer.days[3]=this.volunteerForm.value.wensday;
    this._Volunteer.days[4]=this.volunteerForm.value.thursday;
    this._Volunteer.days[5]=this.volunteerForm.value.friday;

    this._volunteerService.saveUserAndDays(this._Volunteer).subscribe(data=>{
      if(data==true)
      {
        alert("save volunteer success");
      this._router.navigate(["/VolunteerList"]);
      }
      else
      {
        alert("can't save volunteer, try again to change the days");
      }
      
    },err=>{alert("save volunteer failed");});
  }

  constructor(private _volunteerService:VolunteerService,private _route:ActivatedRoute,private _router:Router) {
  
  }

  @Output()
  onSaveVolunteer: EventEmitter<Volunteer> = new EventEmitter();
 

    ngOnInit(): void {
      this._route.paramMap.subscribe(params =>{
            this.VolunteerId=(Number)(params.get("id"));
            this._volunteerService.getVolunteerFromServerById((String)(this.VolunteerId)).subscribe(data => {
              this.volunteer=data;
          });
        })
      }
    

   ifChange()
   {
    // פונקציה שבודקת את שינוי הימים
    //אם התווסף יום, לא עושה כלום חוץ מלשנות
    //אם הוסר ימים: צריך לבדוק שזה ימים לא משובצים ואין בעיה להסירם
    //אם יש בעיה מציג הודעה 
    // 
  // }

  // saveAllVolunteer(VolunteerToSave:Volunteer[]):Observable<boolean>{
  //   return this.http.post("/api/volunteer",this.saveVolunteeer)
  //   .map(res =>{return true;}).catch(err=>{return Observable.throw(err);});}
   }

}