import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno-edit',
  templateUrl: './alumno-edit.component.html',
  styleUrls: ['./alumno-edit.component.css']
})
export class AlumnoEditComponent implements OnInit {
  modoAdd = true;
  id: number;
  carreras = ['ISC', 'ISI', 'IE', 'IES'];
  
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
        }
      }
    );
  }

}
