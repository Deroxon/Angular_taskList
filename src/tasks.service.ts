import { Injectable } from "@angular/core";
import {BehaviorSubject, Observable} from 'rxjs'
import {Task} from "./app/model/task"

@Injectable()

export class Tasks {

   private taskListObs = new BehaviorSubject<Array<Task>>([])

    constructor() {
      const tasksList = [
        {name:'zmyć naczynia', create: new Date().toLocaleString(), isDone:false,},
        {name:'Sprzatanie kuwety', create: new Date().toLocaleString(), isDone:false},
        {name:'Wynieść smieci', create: new Date().toLocaleString(), isDone:false},
        {name:'nakarmić pieski', create: new Date().toLocaleString(), isDone:false},
        {name:'nakarmić pieski', create: new Date().toLocaleString(), isDone:true, end: new Date().toLocaleString()},
        

      ]
        this.taskListObs.next(tasksList)
    }

      add(task: Task) {
        const list = this.taskListObs.getValue();
        list.push(task)
        this.taskListObs.next(list)
      }
    
      remove(task: Task) {
        const list = this.taskListObs.getValue().filter( e => e !== task)
        this.taskListObs.next(list)
      }
      
      done(task: Task) {
        task.end = new Date().toLocaleString()
        task.isDone = true
        const list = this.taskListObs.getValue();
        this.taskListObs.next(list)
      }

      getTaskList$(): Observable<Array<Task>> {
          return this.taskListObs.asObservable()
      }
     
    

}