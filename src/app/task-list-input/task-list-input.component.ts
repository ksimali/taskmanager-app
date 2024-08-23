import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list-input',
  templateUrl: './task-list-input.component.html',
  styleUrl: './task-list-input.component.scss'
})
export class TaskListInputComponent {
  @Input() tasks: Task[] = []; // reçoit la liste des tâches du parent grâce a la propriété `@Input() tasks`
  @Output() taskChanged = new EventEmitter<Task>();

  markAsDone(task: Task){
    task.isDone = true;
    this.taskChanged.emit(task)
  }
}
