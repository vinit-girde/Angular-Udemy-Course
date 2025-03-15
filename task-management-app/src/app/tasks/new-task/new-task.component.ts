import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskData } from '../data.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input() isDialogBoxOpen!: boolean;

  @Output() closeDialog = new EventEmitter<void>();

  // Custom event to submit form data and add it into tasks array.
  @Output() addTask = new EventEmitter<TaskData>();

  // Extracting values of new task field's form using ngModel Directive
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  onCancelClick() {
    this.closeDialog.emit(); // Emit the event
  }

  handleNewTask() {
    this.addTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    });
  }
}
