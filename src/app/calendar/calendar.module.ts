import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PaintDirective } from './paint.directive';
import { AppRoutingModule } from '../app-routing.module'



@NgModule({
  declarations: [
    CalendarComponent,
    PaintDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule,
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
