import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VolunteerDetailsComponentComponent } from './volunteer-module/volunteer-details-component/volunteer-details-component.component';
import { SchedulingComponentComponent } from './scheduling-module/scheduling-component/scheduling-component.component';
import { VolunteerListComponentComponent } from './volunteer-module/volunteer-list-component/volunteer-list-component.component'
import { Route, RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { VolunteerModuleModule } from './volunteer-module/volunteer-module.module';
import { VolunteerService } from './volunteer-module/volunteer.service';
import { SchedulingServiceService } from './scheduling-module/scheduling.service.service';
import { SchedulingModuleModule } from './scheduling-module/scheduling-module.module';

const APP_ROUTES: Route[] = [
  { path: "Scheduling", component: SchedulingComponentComponent },
  { path: "VolunteerList", component: VolunteerListComponentComponent },
  { path: "VolunteerDetails/:id", component: VolunteerDetailsComponentComponent },
  { path: "VolunteerList/:volunteer", component: VolunteerListComponentComponent },

]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,AppRoutingModule,RouterModule.forRoot(APP_ROUTES) ,SchedulingModuleModule
    ,VolunteerModuleModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
