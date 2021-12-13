import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicial', url: '/inicial', icon: 'home' },
    { title: 'Origem', url: '/origem', icon: 'hourglass' },
    { title: 'História', url: '/historia', icon: 'library' },
    { title: 'Outros deuses', url: '/outros-deuses', icon: 'earth' },
    { title: 'Mapa', url: '/mapa', icon: 'map' },
    { title: 'Etnia', url: '/etnia', icon: 'happy' },
  ];
  constructor() {}
}
