import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  tasks: Task[] = [
    {id: "1", title: "Task 1", description: "Description for task 1", isDone: false},
    {id: "2", title: "Task 2", description: "Description for task 2", isDone: true},
    {id: "3", title: "Task 3", description: "Description for task 3", isDone: false},
    {id: "4", title: "Task 4", description: "Description for task 4", isDone: true},
  ]
  title = 'taskmanager-app';
}
