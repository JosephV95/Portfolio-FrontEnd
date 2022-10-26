import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';

import { ExpEditComponent } from './componentes/experiencia/ITEMS/exp-edit/exp-edit.component';
import { EducEditComponent } from './componentes/educacion/ITEMS/educ-edit/educ-edit.component';
import { ProEditComponent } from './componentes/proyectos/ITEMS/pro-edit/pro-edit.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component: IniciarSesionComponent},
  //Router para el CRUD de Experiencia
  {path:'edit/:id', component: ExpEditComponent},
  {path:'edu-edit/:id', component: EducEditComponent},
  {path:'pro-edit/:id', component: ProEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
