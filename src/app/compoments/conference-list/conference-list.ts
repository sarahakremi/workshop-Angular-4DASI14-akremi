import { Component, computed, signal } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../Models/conference';
import { ConferenceDetails } from '../conference-details/conference-details';

@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, DatePipe, UpperCasePipe, ConferenceDetails],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css'
})
export class ConferenceList {
  // Le parent POSSÈDE les données
  conferences = signal<Conference[]>([
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Les nouveautés d’Angular 21 : signals, zoneless et contrôle de flux natif.',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur la gestion d’état réactive avec les signals.',
      date: new Date(2027, 10, 30),
      place: 'Ariana',
      maxParticipants: 30,
      nbParticipants: 24,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Panorama des technologies web modernes.',
      date: new Date(2027, 10, 20),
      place: 'Sousse',
      maxParticipants: 50,
      nbParticipants: 50,
    },
    {
      // Conférence passée : elle ne doit PAS apparaître (filtre « à venir »)
      id: 4,
      title: 'TypeScript Day',
      description: 'Édition 2025, déjà terminée.',
      date: new Date(2025, 4, 10),
      place: 'Monastir',
      maxParticipants: 80,
      nbParticipants: 80,
    },
  ]);

  // Texte de recherche (lié à l'input avec [(ngModel)])
  searchText = signal('');

  // Id de la conférence sélectionnée
  selectedId = signal<number | null>(null);

  // Conférences à venir + filtrées par titre
  filteredConferences = computed(() => {
    const today = new Date();
    const search = this.searchText().toLowerCase();
    return this.conferences().filter(
      c => c.date >= today && c.title.toLowerCase().includes(search)
    );
  });

  // Conférence sélectionnée (envoyée à l'enfant ConferenceDetails)
  selectedConference = computed(
    () => this.conferences().find(c => c.id === this.selectedId()) ?? null
  );

  selectConference(c: Conference) {
    this.selectedId.set(c.id);
  }

  placesRestantes(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  buttonColor(c: Conference): string {
    const places = this.placesRestantes(c);
    if (places === 0) return 'red';
    if (places < 10) return 'orange';
    return 'green';
  }

  // Appelée par le bouton de la liste ET par l'événement (inscrire) de l'enfant
  inscrire(c: Conference) {
    if (this.placesRestantes(c) === 0) return;
    this.conferences.update(list =>
      list.map(conf =>
        conf.id === c.id ? { ...conf, nbParticipants: conf.nbParticipants + 1 } : conf
      )
    );
  }
}
