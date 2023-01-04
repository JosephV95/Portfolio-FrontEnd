import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { Educacion } from "../model/educacion";

@Injectable({
    providedIn: 'root'
})

export class EducacionService {
    // variable de tipo EventEmitter que servirá para avisar a los
  // suscriptores que el modo ha sido cambiado
  private modoAgregarEdu = new EventEmitter<boolean>();

    constructor(private http: HttpClient){
    }

    eduURL = 'https://josevilteportfolio.onrender.com/educacion/'

    getEducaciones(){
        return this.http.get<Educacion[]>(this.eduURL)
    }
    createEducacion(educacion: Educacion){
        return this.http.post<Educacion>(this.eduURL, educacion);
    }
    // Para la variable modoAgregar del EventEmitter
    setModoAgregarEdu(editar : boolean){
        this.modoAgregarEdu.emit(editar);
    }
    getModoAgregarEdu(){
        return this.modoAgregarEdu;
    }       
    //----------------
    deleteEducacion(id: number): Observable<void> {
        return this.http.delete<void>(this.eduURL +`delete/${id}`);     //PRESTAR ATENCION AL TIPO DE COMILLAS INVERSAS
    }
    //Para buscar una Experiencia por id
    getEducacionId(id:number): Observable<Educacion>{
        return this.http.get<Educacion>(this.eduURL+`edit/${id}`);
    }
    //Para Editar una experiencia
    updateEducacion(id: number, educacion: Educacion): Observable<void>{
        return this.http.put<void>(this.eduURL +`edit/${id}`, educacion);
    }
    
    
}


