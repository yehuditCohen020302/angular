import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SchedulingComponentComponent } from './scheduling-component/scheduling-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [SchedulingComponentComponent],
  imports: [
    CommonModule,BrowserModule,ReactiveFormsModule,FormsModule,HttpClientModule,RouterModule

  ]
})
export class SchedulingModuleModule { }

