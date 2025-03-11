import { Component } from '@angular/core';
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
  selectedUser = DUMMY_USERS[dummyUserIndex];

  // gettter property for computing dynamic user image profile image which can directly be used inside src attribute in property binding without parenthesis.
  get imagePath() {
    return `assets/users/` + this.selectedUser.avatar;
  }
}
