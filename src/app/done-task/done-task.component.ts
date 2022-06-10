import { Component, OnInit, Input } from '@angular/core';
import { Tasks } from 'src/tasks.service';
import {Task} from "../model/task"
import { MatSnackBar,MatSnackBarConfig} from '@angular/material/snack-bar';



@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['/done-task.component.css'],


})
export class DoneTaskComponent implements OnInit {

  tasksDone: Array<Task> = [];
  editMode: boolean = false;
  nightMode: boolean = false


  constructor(private taskService: Tasks, public snackBar: MatSnackBar) { 
    this.taskService.getTaskList$().subscribe( (tasks: Array<Task>)  => {
      this.tasksDone = tasks.filter( task => task.isDone === true)
    })
    this.taskService.subNightMode$().subscribe( data => {
      this.nightMode = data
    })
    
  }

  ngOnInit(): void {
    this.taskService.getEditModeValue().subscribe( bool => {
      this.editMode = bool
    } )
  }

  remove(task: Task) { 
    if(confirm(`Are you sure to delete this task: ${task.name}`)) {
      this.taskService.remove(task)
    }  
  }

  edit(task: Task) {
    let communicate ='Change has been sended to API'
    this.taskService.edit(task, communicate)
  }



}
