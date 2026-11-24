import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications {
  notifList = signal([
    'Une nouvelle conférence est disponible.',
    'Sami vous a envoyé une invitation.'
  ]);

  show = signal(false);

  toggle() {
    this.show.set(!this.show());
  }
}
