import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from './calender.component';



@NgModule({
  declarations: [
    CalenderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalenderComponent
  ]
})
export class CalenderModule { }
