import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../alumnos.service';
import { Subscription } from 'rxjs';
import { Alumno } from '../Alumno';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno-lista',
  templateUrl: './alumno-lista.component.html',
  styleUrls: ['./alumno-lista.component.css']
})
export class AlumnoListaComponent implements OnInit {

  alumnos: Alumno[];
  private subscript: Subscription;

  constructor(private alumnosService: AlumnosService,
      private router: Router,
      private route: ActivatedRoute ) { }

  ngOnInit() {
    this.alumnos = this.alumnosService.getAlumnos();

    this.subscript = this.alumnosService.cambiaDato
      .subscribe(
        (arregloAlumnos: Alumno[]) => {
           this.alumnos = arregloAlumnos;
        }
      );

  }

  editarAlumno(alumnoEditar){
    console.log(`El alumno a editar es ${alumnoEditar.id} nombre: ${alumnoEditar.nombre}` );
    this.router.navigate([alumnoEditar.id, 'edit'], {relativeTo: this.route});
  }

  borrarAlumnoLista(alumnoABorrar) {
    this.alumnosService.borrarAlumno(alumnoABorrar.id);
    //this.alumnos = this.alumnosService.getAlumnos();
  }

}
