import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Tasks } from 'src/tasks.service';


@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
})
export class TodoTaskComponent implements OnInit {

  tasksList: string[] = [];


  constructor(private taskService: Tasks) {
    this.taskService.getTaskList$().subscribe( (tasks: Array<string>) => {
      this.tasksList = tasks
    })
   }

  ngOnInit(): void {
  }

  remove(task: string) {
    this.taskService.remove(task)
  }

  done(task: string) {
    this.taskService.done(task)
  }

}
