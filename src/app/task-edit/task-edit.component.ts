import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.scss'
})
export class TaskEditComponent {

  task: Task | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ){
    const taskId = this.route.snapshot.paramMap.get('id');
    console.log(taskId);
  }
}
