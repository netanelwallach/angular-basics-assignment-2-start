import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username = 'TestName';
  allowResetUsername = true;

  getUsername() {
    return this.username;
  }

  resetEnabled() {
    if (this.username) {
      return true;
    }
    return false;
  }

  resetUsername() {
    if (this.username) {
      this.username = '';
    }
  }
}
