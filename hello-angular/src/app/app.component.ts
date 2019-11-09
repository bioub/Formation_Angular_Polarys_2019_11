import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prenom = 'Jean'
  prenoms = ['Jean', 'Pierre', 'Eric']
  showHorloge = true;
  delay = 1000;
}
