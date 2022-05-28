import { Component, OnInit, Input } from '@angular/core';
import { Tasks } from 'src/tasks.service';
import {Task} from "../model/task"


@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',

})
export class DoneTaskComponent implements OnInit {

  tasksDone: Array<Task> = [];

  constructor(private taskService: Tasks) { 
    this.taskService.getTaskList$().subscribe( (tasks: Array<Task>)  => {
      this.tasksDone = tasks.filter( task => task.isDone === true)
    })
  }

  ngOnInit(): void {
  }

}
