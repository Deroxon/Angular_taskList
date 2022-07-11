import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from "@angular/forms";
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component'
import { Tasks } from 'src/tasks.service';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { SortNamePipe } from './shared/sort-name.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PriorityDirective } from './shared/priority.directive';
import { SettingsComponent } from './settings/settings.component';
import { NightModeDirective } from './shared/nightMode.directive';
import { DatePickerComponent } from './add-task/date-picker/date-picker.component';
import {MatButtonModule} from "@angular/material/button"
import {MatDatepickerModule} from "@angular/material/datepicker"
import {MatInputModule } from "@angular/material/input"
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';


@NgModule({
  declarations: [

    //Components
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    SettingsComponent,
    DatePickerComponent,

    //Directives
    CheckedDirective,
    DateDirective,
    PriorityDirective,
    NightModeDirective,

    //Pipes
    TransformTaskPipe,
    SortNamePipe,
    DatePickerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
 
    

    //Angular Material
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatSnackBarModule,
    MatNativeDateModule,
  ],
  providers: [Tasks,],
  bootstrap: [AppComponent]
})
export class AppModule { }
