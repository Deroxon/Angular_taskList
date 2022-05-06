import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Tasks } from 'src/tasks.service';
import {Task} from "../model/task"


@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
})
export class TodoTaskComponent implements OnInit {

  tasksList: Array<Task> = [];


  constructor(private taskService: Tasks) {
    this.taskService.getTaskList$().subscribe( (tasks: Array<Task>) => {
      this.tasksList = tasks
    })
   }

  ngOnInit(): void {
  }

  remove(task: Task) {
    this.taskService.remove(task)
  }

  done(task: Task) {
    this.taskService.done(task)
  }

}
