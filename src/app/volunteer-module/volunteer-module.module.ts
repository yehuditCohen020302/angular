import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerService } from './volunteer.service';
import { VolunteerListComponentComponent } from './volunteer-list-component/volunteer-list-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VolunteerDetailsComponentComponent } from './volunteer-details-component/volunteer-details-component.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [VolunteerListComponentComponent,VolunteerDetailsComponentComponent],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,HttpClientModule,RouterModule
  ],
  providers:[VolunteerService],
  exports:[VolunteerDetailsComponentComponent,VolunteerListComponentComponent]
})
export class VolunteerModuleModule { }
