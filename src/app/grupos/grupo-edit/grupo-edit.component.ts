import { Component, OnInit } from '@angular/core';
import { GruposService } from '../grupos.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-grupo-edit',
  templateUrl: './grupo-edit.component.html',
  styleUrls: ['./grupo-edit.component.css']
})
export class GrupoEditComponent implements OnInit {
  profesores = [];
  asignaturas = [];
  periodos = [];
  dias = [];
  horarios = [];  
  aulas = [];

  formulario: FormGroup;

  constructor(private gruposService: GruposService) { }

  ngOnInit() {
     this.asignaturas = this.gruposService.asignaturas;
     this.profesores = this.gruposService.profesores;
     console.log(this.gruposService.asignaturas);
     console.log(this.asignaturas);

    this.formulario = new FormGroup({
      claveAsignatura : new FormControl(''),
      claveProfesor : new FormControl(''),
    });

  }

}
