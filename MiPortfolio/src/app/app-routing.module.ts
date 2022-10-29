import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';

import { ExpEditComponent } from './componentes/experiencia/ITEMS/exp-edit/exp-edit.component';
import { EducEditComponent } from './componentes/educacion/ITEMS/educ-edit/educ-edit.component';
import { ProEditComponent } from './componentes/proyectos/ITEMS/pro-edit/pro-edit.component';
import { EditSkillFrontComponent } from './componentes/skills/front/edit-skill-front/edit-skill-front.component';
import { EditSkillBackComponent } from './componentes/skills/back/edit-skill-back/edit-skill-back.component';
import { EditSkillSoftComponent } from './componentes/skills/soft/edit-skill-soft/edit-skill-soft.component';
import { EditPersonaComponent } from './componentes/acerca-de/item/edit-persona/edit-persona.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component: IniciarSesionComponent},
  //Router para el CRUD de Experiencia
  {path:'edit/:id', component: ExpEditComponent},
  {path:'edu-edit/:id', component: EducEditComponent},
  {path:'pro-edit/:id', component: ProEditComponent},
  {path:'sf-edit/:id', component: EditSkillFrontComponent},
  {path:'sb-edit/:id', component: EditSkillBackComponent},
  {path:'ss-edit/:id', component: EditSkillSoftComponent},
  {path:'editar/:id', component: EditPersonaComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
