import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './compoments/navbar/navbar';
import { Header } from './compoments/header/header';
import { FriendList } from './compoments/friend-list/friend-list';
import { Notifications } from './compoments/notifications/notifications';
import { Profile } from './compoments/profile/profile';
import { Footer } from './compoments/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Navbar,FriendList,Notifications,Profile,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myproject');
}
