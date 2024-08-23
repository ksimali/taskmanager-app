import { Component } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks: Task[] = []; // une propriété régulier(incapable de passer cet info comme param pour ce composant vs propriété de type Input)
  
}
