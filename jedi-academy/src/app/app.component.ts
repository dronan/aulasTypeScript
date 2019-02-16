import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jedi-academy';
  luke = {name: 'Luke', isJedi: true, temple: 'Cosuscant'};
  leia = {name: 'Leia', isJedi: false};
  han = {name: 'Han Solo', isJedi: false};
}
