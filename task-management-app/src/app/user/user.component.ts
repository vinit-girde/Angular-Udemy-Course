import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //now better way is to pass it from outside instead of finding index so use @Input decorator
  // selectedUser = DUMMY_USERS[dummyUserIndex];

  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;

  @Output() select = new EventEmitter();

  // gettter property for computing dynamic user image profile image which can directly be used inside src attribute in property binding without parenthesis.
  get imagePath() {
    return `assets/users/` + this.avatar;
  }
  // Function to perform action on clicking of user
  onSelectedUser() {
    this.select.emit(this.id);
  }
}
