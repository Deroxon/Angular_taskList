import { Component, OnInit, } from '@angular/core';
import { Tasks } from 'src/tasks.service';



@Component({
  selector: 'settings-component',
  templateUrl: './settings.component.html',
  styleUrls: ['/settings.component.css']
})
export class SettingsComponent  {

    constructor(private taskService: Tasks){}

isSettings: boolean = false;
subEdit: any;
isNightMode: boolean = false;

ngOnInit() {

this.taskService.getEditModeValue().subscribe( (data:any) => this.subEdit = data )
this.taskService.subNightMode$().subscribe((data:any) => this.isNightMode = data)
}

editTasks() {
  this.taskService.setEditMode()
}

toggleSetting() {
    this.isSettings = !this.isSettings
}


nightMode() {
  this.taskService.nightMode()
}



}
