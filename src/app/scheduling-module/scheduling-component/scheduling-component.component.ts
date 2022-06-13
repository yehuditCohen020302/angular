import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SchedulingServiceService } from '../scheduling.service.service';

@Component({
  selector: 'app-scheduling-component',
  templateUrl: './scheduling-component.component.html',
  styleUrls: ['./scheduling-component.component.css']
})
export class SchedulingComponentComponent implements OnInit {

  volDays: any[][] = [];
  _scheduling: string[] = [];
  
  get scheduling() {
    return this._scheduling;
  }

  //@Input() 
  set scheduling(scheduling: string[]) {
    this._scheduling = scheduling;
    if (this.scheduling) {
      this.schedulingForm.controls["sunday"].setValue(scheduling[0]);
      this.schedulingForm.controls["monday"].setValue(scheduling[1]);
      this.schedulingForm.controls["tuesday"].setValue(scheduling[2]);
      this.schedulingForm.controls["wensday"].setValue(scheduling[3]);
      this.schedulingForm.controls["thursday"].setValue(scheduling[4]);
      this.schedulingForm.controls["friday"].setValue(scheduling[5]);

    }
  }
  schedulingForm:FormGroup = new FormGroup(
      {
        "sunday": new FormControl(""),
        "monday": new FormControl(""),
        "tuesday": new FormControl(""),
        "wensday": new FormControl(""),
        "thursday": new FormControl(""),
        "friday": new FormControl("")
      }
    );
  constructor(private _schedulingService: SchedulingServiceService, _route: ActivatedRoute, private _router: Router) {
    
  }

  ngOnInit(): void {
    this._schedulingService.getScheduling().subscribe((data) => {
      this.scheduling = data;
    });
    this._schedulingService.getVoluteersForScheduling().subscribe((data) => {
      //debugger;
      this.volDays = data;
    });
    // console.log(this.newScheduling);

  }

  newScheduling: string[] =[];
  saveScheduling() {
    this.newScheduling[0] = this.schedulingForm.value.sunday;
    this.newScheduling[1] = this.schedulingForm.value.monday;
    this.newScheduling[2] = this.schedulingForm.value.tuesday;
    this.newScheduling[3] = this.schedulingForm.value.wensday;
    this.newScheduling[4] = this.schedulingForm.value.thursday;
    this.newScheduling[5] = this.schedulingForm.value.friday;
    // this.schedulingForm.controls["0"].setValue(vol.name);
    //   this.scheduling=this.schedulingForm.value;
    
    console.log(this.newScheduling);

    for (let i = 0; i < this.newScheduling.length; i++) {
      if (typeof this.newScheduling[i] != 'string') {
        this.newScheduling[i] = "";
      }
    }

    this._schedulingService.saveSchedulingFromServer(this.newScheduling).subscribe(data => {
      if (data)
      {
        alert("the save newScheduling is success!");
        //console.log(this.newScheduling);
        this._router.navigate(["/"]);
      }
      else
        alert("the save newScheduling is failed!");
    });


  }


}
