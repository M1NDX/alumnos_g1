import { Component, OnInit } from '@angular/core';
import { GruposService } from '../grupos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  tabla = [
    {dia:'Lunes', hora:'11-13', aula:'T202'},
    {dia:'Miércoles', hora:'11-13', aula:'T202'},
];

  formulario: FormGroup;

  constructor(private gruposService: GruposService) { }

  ngOnInit() {
     this.asignaturas = this.gruposService.asignaturas;
     this.profesores = this.gruposService.profesores;
     console.log(this.gruposService.asignaturas);
     console.log(this.asignaturas);
      

    this.formulario = new FormGroup({
      claveAsignatura : new FormControl(this.asignaturas[0].clave, [Validators.required]),
      claveProfesor : new FormControl(this.profesores[0].id),
    });

  }

  submit() {
    console.log(this.formulario.value());

  }

}
