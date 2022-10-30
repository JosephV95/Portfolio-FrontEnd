import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from "rxjs";
import { Proyecto } from "../model/proyecto";

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private modoAgregarPro = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

    proUrl = 'https://josevilteportfolio.herokuapp.com/proyecto/'

    getProyectos(){
      return this.http.get<Proyecto[]>(this.proUrl)
    }
    createProyecto(proyecto: Proyecto){
      return this.http.post<Proyecto>(this.proUrl, proyecto);
    }
    // Para la variable modoAgregar del EventEmitter
    setModoAgregarPro(editar : boolean){
      this.modoAgregarPro.emit(editar);
    }
    getModoAgregarPro(){
      return this.modoAgregarPro;
    } 

    deleteProyecto(id: number): Observable<void> {
      return this.http.delete<void>(this.proUrl +`delete/${id}`);
    }
    getProyectoId(id:number): Observable<Proyecto>{
        return this.http.get<Proyecto>(this.proUrl+`pro-edit/${id}`);
    }
    updateProyecto(id: number, proyecto: Proyecto): Observable<void>{
        return this.http.put<void>(this.proUrl +`pro-edit/${id}`, proyecto);
    }
}
