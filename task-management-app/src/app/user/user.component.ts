import { Component, EventEmitter, Input, Output } from '@angular/core';
type UserType = {
  id: string;
  avatar: string;
  name: string;
};

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //now better way is to pass it from outside instead of finding index so use @Input decorator
  // selectedUser = DUMMY_USERS[dummyUserIndex];

  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;

  // Instead of passing three inputs we can wrap them inside user object and use that in @Input
  @Input({ required: true }) user?: UserType;

  @Output() select = new EventEmitter<string>();

  // To check if user is selected and active
  @Input({ required: true }) selected?: boolean;

  // gettter property for computing dynamic user image profile image which can directly be used inside src attribute in property binding without parenthesis.
  get imagePath() {
    return `assets/users/` + this.user?.avatar;
  }
  // Function to perform action on clicking of user
  onSelectedUser() {
    this.select.emit(this.user?.id);
  }
}
