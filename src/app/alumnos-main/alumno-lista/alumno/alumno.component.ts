import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../../Alumno';





@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  
  @Input() alumno: Alumno;
  @Output() editAlumno = new EventEmitter();
  @Output() borrarAlumno = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  alumnoPorBorrar() {
    this.borrarAlumno.emit(this.alumno);
  }

  editarAlumno(){
    this.editAlumno.emit(this.alumno);
  }

}
