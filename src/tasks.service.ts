import { Injectable, ChangeDetectorRef } from "@angular/core";
import {BehaviorSubject, Observable} from 'rxjs'
import {Task} from "./app/model/task"
import { HttpClient } from '@angular/common/http';


@Injectable()

export class Tasks {



// trzeba naprawić to aby usuwało się i zrobiło na tym samej stronie a nie po odświeżeniu lub trzech razach, podejrzewam że chodzi o to ze błędne dane są brane z bazy dlateog zapytanie ma problem
// localStorage aby użytkownik miał mozliwosc dodania 10 tasków po czym przy próbi dodania następnego nie doda się póki nie zaakceptuje tego że wie co robi bo dodał jużponad 10 tasków do małej bazy danych

   private taskListObs$ = new BehaviorSubject<Array<Task>>([])
   private isSended$ = new BehaviorSubject<boolean>(true)
   editMode = false
   private editMode$ = new BehaviorSubject<boolean>(this.editMode)
    constructor(private http: HttpClient, ) {
       this.getAllPosts()

      
    }


      getAllPosts() {
        return this.http.get<Array<Task>>("https://629600b975c34f1f3b26b949.mockapi.io/toDoList").subscribe(posts => {
          this.taskListObs$.next(posts)
          console.log(posts)
          this.isSended$.next(true)
        }
        )
      }


      // Adding TaskList with animation to give some time for mockapi
      add(task: Task) {
        const list = this.taskListObs$.getValue();
        list.push(task)
        this.taskListObs$.next(list)
        this.http.post<Task>("https://629600b975c34f1f3b26b949.mockapi.io/toDoList", task).subscribe()
        setTimeout( () => this.getAllPosts(), 500)
        this.isSended$.next(true)
       
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
      edit(task: Task) {
        this.http.put<Task>("https://629600b975c34f1f3b26b949.mockapi.io/toDoList/"+task.id, task).subscribe()
      }

      // switching editMode
      setEditMode() {
        this.editMode = !this.editMode
        this.editMode$.next(this.editMode)
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