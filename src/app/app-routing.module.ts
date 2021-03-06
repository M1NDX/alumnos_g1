import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosMainComponent } from './alumnos-main/alumnos-main.component';
import { HomeComponent } from './home/home.component';
import { AlumnoListaComponent } from './alumnos-main/alumno-lista/alumno-lista.component';
import { AlumnoDetalleComponent } from './alumnos-main/alumno-detalle/alumno-detalle.component';
import { AlumnoEditComponent } from './alumnos-main/alumno-edit/alumno-edit.component';
import { GruposComponent } from './grupos/grupos.component';
import { GrupoEditComponent } from './grupos/grupo-edit/grupo-edit.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'alumnos', component: AlumnosMainComponent, children: [
    {path: '', component: AlumnoListaComponent , canActivate: [AuthGuardService]},
    {path: 'new', component: AlumnoEditComponent, canActivate: [AuthGuardService]},
    {path: ':id', component: AlumnoDetalleComponent , canActivate: [AuthGuardService]},
    {path: ':id/edit', component: AlumnoEditComponent, canActivate: [AuthGuardService]},
  ] },
  {path: 'grupos', component: GruposComponent, children: [
    // {path: '', component: AlumnoListaComponent},
    {path: 'new', component: GrupoEditComponent},
    // {path: ':id', component: AlumnoDetalleComponent},
    // {path: ':id/edit', component: AlumnoEditComponent},
  ] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
