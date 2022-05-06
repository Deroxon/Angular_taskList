import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tasks } from 'src/tasks.service';


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
    this.taskService.add(this.newTask)
    this.newTask = ''
  }

}
