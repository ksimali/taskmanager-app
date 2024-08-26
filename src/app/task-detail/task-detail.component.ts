import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent {

  task: Task | undefined;
  
  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ){
    const taskId = route.snapshot.paramMap.get("id"); // pour recuperer l'id passer en paramètre dans l'url
    console.log(taskId);
    this.task = taskService.getTask(taskId!);
    console.log(this.task);
  }
}
