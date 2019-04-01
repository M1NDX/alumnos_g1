import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Alumno } from '../Alumno';

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
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params) => {
        if(params.id) {
          this.modoAdd=false;
          this.id = params.id;
        }else {
          this.modoAdd=true;
          //TODO: solicitar al servicio el id siguiente
          this.alumno = new Alumno(8,'',20,60,'ISI','M');
        }
      }
    );
  }

  submit(formulario: NgForm) {
    console.log(formulario);
    
  }

}
