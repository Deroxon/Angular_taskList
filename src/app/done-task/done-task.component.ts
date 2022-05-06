import { Component, OnInit, Input } from '@angular/core';
import { Tasks } from 'src/tasks.service';


@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',

})
export class DoneTaskComponent implements OnInit {

  tasksDone: string[] = [];

  constructor(private taskService: Tasks) { 
    this.taskService.getDoneList$().subscribe( (tasks: Array<string>)  => {
      this.tasksDone = tasks
    })
  }

  ngOnInit(): void {
  }

}
