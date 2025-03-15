import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type TaskType = {
  id: string;
  userId: string;
  summary: string;
  dueDate: string;
  title: string;
};
@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task?: TaskType;

  @Output() completedTask = new EventEmitter<string>();

  // Function to delete task
  onCompletedTask() {
    this.completedTask.emit(this.task?.id);
  }
}
