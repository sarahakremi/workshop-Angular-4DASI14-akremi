
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friend-list',
  imports: [FormsModule],
  templateUrl: './friend-list.html',
  styleUrl: './friend-list.css'
})
export class FriendList {
  friends = [
    { name: 'Ahmed', email: 'ahmed@esprit.tn' },
    { name: 'Sara', email: 'sara@esprit.tn' },
    { name: 'Amine', email: 'amine@esprit.tn' }
  ];
}
