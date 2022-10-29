import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private modoEdit = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  URL = 'http://localhost:8080/personas/'

  getPersonas(){
    return this.http.get<Persona[]>(this.URL);
  }
  getPersonaId(id:number): Observable<Persona>{
    return this.http.get<Persona>(this.URL+`editar/${id}`);
  }
  updatePersona(id: number, persona: Persona): Observable<void>{
    return this.http.put<void>(this.URL +`editar/${id}`, persona);
  }
  // Para la variable modoAgregar del EventEmitter
  setModoEdit(editar : boolean){
    this.modoEdit.emit(editar);
  }
  getModoEdit(){
    return this.modoEdit;
  } 

  
  
   
}
