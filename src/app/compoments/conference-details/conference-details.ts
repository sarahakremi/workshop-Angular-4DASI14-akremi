import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Conference } from '../../Models/conference';

@Component({
  selector: 'app-conference-details',
  imports: [DatePipe],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css'
})
export class ConferenceDetails {
  // PARENT ➜ ENFANT : le parent (ConferenceList) envoie la conférence sélectionnée
  conference = input<Conference | null>(null);

  // ENFANT ➜ PARENT : l'enfant prévient le parent qu'on a cliqué sur "S'inscrire"
  inscrire = output<Conference>();

  placesRestantes(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  onInscrire(c: Conference) {
    this.inscrire.emit(c);
  }
}
