import { Injectable } from "@angular/core";
import {BehaviorSubject, Observable} from 'rxjs'
import {Task} from "./app/model/task"

@Injectable()

export class Tasks {

   private tasksList: Array<Task> = []
   private tasksDone: Array<Task> = []

   private taskListObs = new BehaviorSubject<Array<Task>>([])
   private taskDoneObs = new BehaviorSubject<Array<Task>>([])

    constructor() {
        //this.taskDoneObs.next(this.tasksDone)
        //this.taskListObs.next(this.tasksList)
    }

 
      add(task: Task) {
        this.tasksList.push(task)
        this.taskListObs.next(this.tasksList)
      }
    
    
      remove(task: Task) {
        this.tasksList = this.tasksList.filter( e => e !== task)
        this.taskListObs.next(this.tasksList)
      }


      done(task: Task) {
        this.tasksDone.push(task)
        this.remove(task)
        this.taskDoneObs.next(this.tasksDone)
      }

      getTaskList$(): Observable<Array<Task>> {
          return this.taskListObs.asObservable()
      }
      getDoneList$(): Observable<Array<Task>> {
        return this.taskDoneObs.asObservable()
    }
    

}