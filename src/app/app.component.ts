import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alumnos';
  entrada = 'López';

  sayHi() {
    return 'hola';
  }

  activar() {
    return this.entrada.length > 3;
  }

}
