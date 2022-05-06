import { Injectable } from "@angular/core";
import {BehaviorSubject, Observable} from 'rxjs'

@Injectable()

export class Tasks {

   private tasksList: string[] = []
   private tasksDone: string[] = []

   private taskListObs = new BehaviorSubject<Array<string>>(this.tasksList)
   private taskDoneObs = new BehaviorSubject<Array<string>>(this.tasksList)

    constructor() {
        this.taskDoneObs.next(this.tasksDone)
        this.taskListObs.next(this.tasksList)
    }

 
      add(task: string) {
        this.tasksList.push(task)
        this.taskListObs.next(this.tasksList)
      }
    
    
      remove(task: string) {
        this.tasksList = this.tasksList.filter( e => e !== task)
        this.taskListObs.next(this.tasksList)
      }


      done(task: string) {
        this.tasksDone.push(task)
        this.remove(task)
        this.taskDoneObs.next(this.tasksDone)
      }

      getTaskList$(): Observable<Array<string>> {
          return this.taskListObs.asObservable()
      }
      getDoneList$(): Observable<Array<string>> {
        return this.taskDoneObs.asObservable()
    }
    

}