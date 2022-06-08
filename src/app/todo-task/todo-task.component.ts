import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Tasks } from 'src/tasks.service';
import {Task} from "../model/task"


@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['/todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  tasksList: Array<Task> = [];


  constructor(private taskService: Tasks) {
    this.taskService.getTaskList$().subscribe( (tasks: Array<Task>) => {
      this.tasksList = tasks.slice().filter( task => task.isDone === false)
    })
   }

  ngOnInit(): void {
  }

  remove(task: Task) {
    this.taskService.remove(task)
  }

  done(task: Task) {
    task.end = new Date().toLocaleDateString();
    this.taskService.done(task)
  }

}
