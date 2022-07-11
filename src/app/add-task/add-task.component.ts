import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { Tasks } from 'src/tasks.service';
import {Task} from "../model/task"
import { MatSnackBar,MatSnackBarConfig} from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']

})
export class AddTaskComponent implements OnInit {

  newTask: string =''
  @Input() dateComplete: string = '';
  priority:number = 0;
  arrayofHours: string[] = []
  @Input() hour: string = ''

  constructor(private taskService: Tasks, public snackBar: MatSnackBar) { 
  
  }

  ngOnInit(): void {
    let minutes: any = "00"
    let hour: any = "00"

    for(let i =0; i<= 95; i++) {
      let connected =[]

      connected.push(hour + ":"+minutes)

      minutes = Number(minutes) + 15

      if(minutes === 60) {
        hour = Number(hour)+1
        if(hour < 9) {
          hour = '0' + String(hour)
        }
        minutes = '00'
      }
      this.arrayofHours.push(connected.join())

    }

  }

  add() {
    this.subDate()

    if(this.dateComplete === '' || undefined){
      this.taskService.sendAlert('There is no filled date, try again')
    }
    else {
      let date = this.dateComplete.slice(1,11) + " | " + this.hour
      const task: Task = ({name: this.newTask, create: new Date().toLocaleString(), isDone: false, plannedDate: date, priority: this.priority})
      this.taskService.add(task);
      this.newTask = ''
    }

  } 
  subDate() {
     this.taskService.subTaskDate$().subscribe( (data:string) => this.dateComplete = data)
  }

}
