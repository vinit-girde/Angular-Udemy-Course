import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// helper variable to randomly select index from dummy users data
let dummyUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //now better way is to pass it from outside instead of finding index so use @Input decorator
  // selectedUser = DUMMY_USERS[dummyUserIndex];

  @Input() avatar!: string;
  @Input() name!: string;

  // gettter property for computing dynamic user image profile image which can directly be used inside src attribute in property binding without parenthesis.
  get imagePath() {
    return `assets/users/` + this.avatar;
  }
  // Function to perform action on clicking of user
  onSelectedUser() {}
}
