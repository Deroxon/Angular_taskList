import { Injectable, ChangeDetectorRef } from "@angular/core";
import {BehaviorSubject, Observable} from 'rxjs'
import {Task} from "./app/model/task"
import { HttpClient } from '@angular/common/http';
import { MatSnackBar,MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable()

export class Tasks {

   editMode = false
   NightMode = false

 
   // tasks to do:
   // make changing date more simple

   private taskListObs$ = new BehaviorSubject<Array<Task>>([])
   private isSended$ = new BehaviorSubject<boolean>(true)
   private taskCounter = Number(localStorage.getItem('taskCount'))
   private editMode$ = new BehaviorSubject<boolean>(this.editMode)
   private isNightMode$ = new BehaviorSubject<boolean>(this.NightMode)
   private DateOfTask$ = new BehaviorSubject<string>('')
 
    constructor(private http: HttpClient, public snackBar: MatSnackBar ) {
       this.getAllPosts()
      
    }


      getAllPosts() {
        return this.http.get<Array<Task>>("https://629600b975c34f1f3b26b949.mockapi.io/toDoList").subscribe(posts => {
          this.taskListObs$.next(posts)
          this.isSended$.next(true)
        }
        )
      }


      // Adding TaskList with animation to give some time for mockapi
      add(task: Task) {
        if(this.localStorageCount()) {
          const list = this.taskListObs$.getValue();
          list.push(task)
          this.taskListObs$.next(list)
          this.http.post<Task>("https://629600b975c34f1f3b26b949.mockapi.io/toDoList", task).subscribe()
          setTimeout( () => this.getAllPosts(), 500)
          this.isSended$.next(true)
        }
        else {}

      }

      localStorageCount() {
       
        if(this.taskCounter % 10 ===0) {
          if(confirm('ALERT, our API has limited number of tasks, do you want to add more?')) { }
          else {
            return false
          }
          
        }
        this.taskCounter++
        localStorage.setItem('taskCount', JSON.stringify(this.taskCounter))
        return true
      }
      
      // remove from base TaskList
      remove(task: Task) {
        const list = this.taskListObs$.getValue().filter( e => e !== task)
        this.taskListObs$.next(list)
        return this.http.delete<Task>("https://629600b975c34f1f3b26b949.mockapi.io/toDoList/"+task.id).subscribe()

      }
      
      // checking as done task
      done(task: Task) {
        task.end = new Date().toLocaleString()
        task.isDone = true
        const list = this.taskListObs$.getValue();
        this.taskListObs$.next(list)
        this.http.put<Task>("https://629600b975c34f1f3b26b949.mockapi.io/toDoList/"+task.id, task).subscribe()
      }

      // sending edited task
      edit(task: Task, communicate?: string) {
        this.http.put<Task>("https://629600b975c34f1f3b26b949.mockapi.io/toDoList/"+task.id, task).subscribe()
        this.sendAlert(communicate)
      }

      // switching editMode
      setEditMode() {
        this.editMode = !this.editMode
        this.editMode$.next(this.editMode)
      }

      nightMode() {
        this.NightMode = !this.NightMode
        this.isNightMode$.next(this.NightMode)
      }
      // open snackBar
      sendAlert(communicate: any) {
        let config = new MatSnackBarConfig()
        config.duration = 1000
        this.snackBar.open(communicate, '', config)
    
      }

      // setDate

      setTaskDate(date: string) {
        this.DateOfTask$.next(date)
      }

      /// RETURNING AS OBSERVABLE SUBSCRIPTIONS

      subTaskDate$(): Observable<string> {
        return this.DateOfTask$.asObservable()
      }


      subNightMode$() {
        return this.isNightMode$.asObservable()
      }

      getTaskList$(): Observable<Array<Task>> {
          return this.taskListObs$.asObservable()
      }

      getEditModeValue(): Observable<boolean> {
        return this.editMode$.asObservable()
      }

      subIsSended() {
        return this.isSended$.asObservable()
      }
     
    

}