import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Tasks } from 'src/tasks.service';
import {Task} from "../model/task"

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',

})
export class AddTaskComponent implements OnInit {

  newTask: string =''
  dateComplete: any;
  priority:number = 0;

  constructor(private taskService: Tasks) { }

  ngOnInit(): void {
  }

  add() {
    const task: Task = ({name: this.newTask, create: new Date().toLocaleString(), isDone: false, plannedDate: this.dateComplete, priority: this.priority})
    this.taskService.add(task);
    this.newTask = ''
    console.log(this.dateComplete)
    console.log(this.priority)
  } 

}
