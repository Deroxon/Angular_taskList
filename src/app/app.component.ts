import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Tasks } from 'src/tasks.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  showLoadingIndicator: boolean = true;
  subEdit: any;
  constructor(private tasksService: Tasks){}

  ngOnInit() {
    this.tasksService.subIsSended().subscribe(data => {
      this.showLoadingIndicator = data
      setTimeout( ()=> this.showLoadingIndicator = false, 800)
    })
    this.tasksService.getEditModeValue().subscribe( data => this.subEdit = data )
  }

  editTasks() {
    this.tasksService.setEditMode()
  }

}
