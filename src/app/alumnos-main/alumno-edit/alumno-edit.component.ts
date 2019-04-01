import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Alumno } from '../Alumno';
import { AlumnosService } from '../alumnos.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-alumno-edit',
  templateUrl: './alumno-edit.component.html',
  styleUrls: ['./alumno-edit.component.css']
})
export class AlumnoEditComponent implements OnInit {
  modoAdd = true;
  id: number;
  carreras = ['ISC', 'ISI', 'IE', 'IES'];
  alumno: Alumno;
  error= false;

  constructor(private route: ActivatedRoute,
       private alumnoService: AlumnosService,
       private location: Location) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params) => {
        if(params.id) {
          this.modoAdd=false;
          this.id = params.id;
          this.error = false;
          //TODO: En modo edición falta solicitar al servicio el alumno con el id obtenido
        }else {
          this.modoAdd=true;
          this.error = false;
          this.alumno = new Alumno(this.alumnoService.getNextId(),'',20,60,'ISI','M');
        }
      }
    );
  }
  calificacionCorrecta() {
    return this.alumno.calificacion>49  && this.alumno.calificacion<=100;

  }

  submit(formulario: NgForm) {
    console.log(formulario);
    if(this.alumnoService.addAlumno(this.alumno) ){
      this.location.back();
      
    }else{
      this.error= true;
    }

  }

  cancelar(formulario: NgForm){
    this.location.back();
  }

  cambiosNombre(){
    this.error= false;
  }

}
