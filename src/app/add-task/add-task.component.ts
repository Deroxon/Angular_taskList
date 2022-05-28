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
    const task: Task = ({name: this.newTask, create: new Date().toLocaleString(), isDone: false })
    this.taskService.add(task)
    this.newTask = ''


    let data = ''
    let bod = { 
      "dataSource": "angular-db",
      "database": "learn-data-api",
      "collection": "people",
    }

    fetch('https://data.mongodb-api.com/app/data-hlamo/endpoint/data/beta/action/insertOne', {
      method: 'POST',
      headers: {
        "X-Auth-Token": "629034ab9f328ad4df2d5cc6",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
       'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        "Content-Type": "application/json",
        'Access-Control-Request-Headers': '*',
        
      },
      body: JSON.stringify({
        "dataSource": "angular-db",
        "database": "learn-data-api",
        "collection": "people",
        "document": {
          "_id": "6193504e1be4ab27791c8133",
          "text": "Do the dishes"
        }
        } )
      
    })
    .then((res) => res.json())
  .then((data) => {
    console.log(data)
  })
    
  }

}
