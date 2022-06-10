import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
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
  dateComplete: string = '';
  priority:number = 0;



  constructor(private taskService: Tasks, public snackBar: MatSnackBar) { 
  
  }


  ngOnInit(): void {
  
 
  }

  add() {
    if(this.dateComplete === ''){
      this.taskService.sendAlert('There is no filled date, try again')
    }
    else {
      const task: Task = ({name: this.newTask, create: new Date().toLocaleString(), isDone: false, plannedDate: this.dateComplete, priority: this.priority})
      this.taskService.add(task);
      this.newTask = ''
      console.log(this.dateComplete)
      console.log(this.priority)
    }

  } 

}
