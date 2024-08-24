import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks: Task[] = []; // une propriété régulier(incapable de passer cet info comme param pour ce composant vs propriété de type Input)
  
  constructor(private taskService: TaskService, private router: Router){
    this.tasks = taskService.getTasks();
  }

  goToDetail(task: Task){
    this.router.navigate(['/task', task.id]);
  }
}
