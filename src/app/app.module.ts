// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AlumnoComponent } from './alumno/alumno.component';
//import { AlumnoListaComponent } from './alumno-lista/alumno-lista.component';
import { AlumnosMainComponent } from './alumnos-main/alumnos-main.component';
import { AlumnoListaComponent } from './alumnos-main/alumno-lista/alumno-lista.component';
import { AlumnoComponent } from './alumnos-main/alumno-lista/alumno/alumno.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AlumnoEditComponent } from './alumnos-main/alumno-edit/alumno-edit.component';
import { AlumnoDetalleComponent } from './alumnos-main/alumno-detalle/alumno-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    AlumnoListaComponent,
    AlumnosMainComponent,
    HeaderComponent,
    HomeComponent,
    AlumnoEditComponent,
    AlumnoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
