import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications {

  showNotifications: boolean = false;

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }
}