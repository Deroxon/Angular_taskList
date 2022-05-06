import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tasks } from 'src/tasks.service';
import {Task} from "../model/task"

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
})
export class AddTaskComponent implements OnInit {

  newTask: string =''

  constructor(private taskService: Tasks) { }

  ngOnInit(): void {
  }

  add() {
    const task: Task = ({name: this.newTask, create: new Date})
    this.taskService.add(task)
    this.newTask = ''
  }

}
