import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { Tasks } from 'src/tasks.service';


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent{

  constructor(private service: Tasks) { }

  dateChanged($event:any) {
    let changedDate = $event.target.value
    changedDate = new Date(changedDate.getTime() - (changedDate.getTimezoneOffset() * 60000)).toJSON();
    //date.getTime() returns time in milleseconds, so we should convert the second operand to milliseconds as well. Since date.getTimezoneOffset() returns offset in minutes, we multiply it 60000, because 1 minute = 60000milliseconds. So by subtracting offset from current time we get the time in UTC.
    changedDate = JSON.stringify(changedDate)
    this.service.setTaskDate(changedDate)
  }
}
