import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
       private location: Location,
       private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params) => {
        if(params.id) {
          this.modoAdd=false;
          this.id = Number(params.id);
          this.error = false;
          this.alumno = this.alumnoService.getAlumno(this.id);
          console.log(this.id);
          console.log(this.alumno);
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

    if(this.modoAdd){
      if(!this.alumnoService.addAlumno(this.alumno) ){
        this.error= true;
      }
    }else{
      this.alumnoService.editAlumno(this.alumno);
    }

     // this.location.back();
     //this.router.navigate(['../'], {relativeTo: this.route});
     this.router.navigate( ['/alumnos']);
  }

  cancelar(){
    this.location.back();
  }

  cambiosNombre(){
    this.error= false;
  }

}
