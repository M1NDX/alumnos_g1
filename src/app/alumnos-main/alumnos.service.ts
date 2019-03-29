import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alumno } from './Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  cambiaDato = new Subject<Alumno[]>();

  alumnos: Alumno[] = [
    new Alumno(1, 'Alicia', 23, 85, 'ISC', 'F'),
    new Alumno(2, 'Alberto', 24, 50, 'ISC', 'M'),
    new Alumno(3, 'Rodrigo', 23, 73, 'ISC', 'M'),
    new Alumno(4, 'Marcela', 25, 58, 'ISC', 'F'),
  ];
  
  // [
  //   {
  //     id: 1,
  //     nombre: 'Alicia',
  //     edad: 23,
  //     calificacion: 85,
  //     carrera: 'ISC',
  //     sexo: 'F'
  //   },
  //   {
  //     id: 2,
  //     nombre: 'Alberto',
  //     edad: 24,
  //     calificacion: 50,
  //     carrera: 'ISC',
  //     sexo: 'M'
  //   }
  // ];
  constructor() { }

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
