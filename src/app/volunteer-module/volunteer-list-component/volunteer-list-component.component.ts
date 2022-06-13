import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Volunteer } from '../volunteer.model';
import { VolunteerService } from '../volunteer.service';
import { Router } from '@angular/router';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-volunteer-list-component',
  templateUrl: './volunteer-list-component.component.html',
  styleUrls: ['./volunteer-list-component.component.css']
})
export class VolunteerListComponentComponent implements OnInit {

  volunteer: Volunteer[]=[];

  constructor(private _volunteerService: VolunteerService, private _volRouter:Router){ }

     ngOnInit(): void {
      this._volunteerService.getVolunteerFromServer().subscribe((data: Volunteer[]) => {
      this.volunteer = data;
      });
    }

   selectedVolunteer:Volunteer=new Volunteer;

   editvolunteer(volunteer: Volunteer){
      this.selectedVolunteer=volunteer;
  }

   deletevolunteer(volunteer: Volunteer){
    var dele=this.volunteer.indexOf(volunteer)
    this.volunteer.slice(dele,1);
  }

  
}