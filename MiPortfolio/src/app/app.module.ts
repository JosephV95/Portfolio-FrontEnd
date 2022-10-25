import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { HomeComponent } from './componentes/home/home.component';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { interceptorProvider } from './servicio/interceptor-service';
import { ListarComponent } from './Item/Experiencia/listar/listar.component';
import { AddComponent } from './Item/Educacion/add/add.component';
import { EditComponent } from './Item/Experiencia/edit/edit.component';

///NO ESTOY DEGURO SI SE IMPORTA EL EXPERIENCIA SERVICE
import {ExperienciaService} from './servicio/experiencia-service';
import { ExpAddComponent } from './componentes/experiencia/ITEMS/exp-add/exp-add.component';
import { ExpEditComponent } from './componentes/experiencia/ITEMS/exp-edit/exp-edit.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienciaComponent,
    AcercaDeComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    IniciarSesionComponent,
    HomeComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    ExpAddComponent,
    ExpEditComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,  //Lo agregue para formularios reactivos
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
        
  ],

  providers: [
    interceptorProvider,
    ///NO ESTOY DEGURO SI SE IMPORTA EL EXPERIENCIA SERVICE
    ExperienciaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
