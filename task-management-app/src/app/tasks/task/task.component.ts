import { Component, Input } from '@angular/core';

type TaskType = {
  id: string;
  userId: string;
  summary: string;
  dueDate: string;
  title: string;
};
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task?: TaskType;
}
