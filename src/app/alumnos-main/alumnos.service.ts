import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alumno } from './Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  cambiaDato = new Subject<Alumno[]>();
  private lastId = 1;

  alumnos: Alumno[] = [
    new Alumno(this.lastId++, 'Alicia', 23, 85, 'ISC', 'F'),
    new Alumno(this.lastId++, 'Alberto', 24, 50, 'ISC', 'M'),
    new Alumno(this.lastId++, 'Rodrigo', 23, 73, 'ISC', 'M'),
    new Alumno(this.lastId++, 'Marcela', 25, 58, 'ISC', 'F'),
  ];
  
  constructor() { }

  addAlumno(alumno: Alumno): boolean {
    alumno.id = this.lastId++;

    const al = this.alumnos.find(al=> al.nombre.toUpperCase() === alumno.nombre.toUpperCase());
    if (al) { //existe alumno
      this.lastId--;
      return false;
    }

    this.alumnos.push(Object.assign({}, alumno)); //creamos una copia
    this.notificarCambios();
    return true;
  }

  getNextId(): number {
    return this.lastId;
  }

  getAlumnos(): Alumno[] {
    return this.alumnos.slice();
  }

  notificarCambios() {
    this.cambiaDato.next(this.alumnos.slice());
  }

  borrarAlumno(id: number): boolean {
    const alPos = this.alumnos.findIndex(al => al.id === id);

    if(alPos >= 0){
      console.log('alumno borrado');
      this.alumnos.splice(alPos,1);
      this.notificarCambios();
      return true;
    }

    return false;
  }

}
