import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input() isDialogBoxOpen!: boolean;

  @Output() closeDialog = new EventEmitter<void>(); // Add this line

  onCancelClick() {
    this.closeDialog.emit(); // Emit the event
  }
}
