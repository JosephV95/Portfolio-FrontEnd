import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { Experiencia } from "../model/experiencia";

@Injectable({
    providedIn: 'root'
})
export class ExperienciaService {

  // variable de tipo EventEmitter que servirá para avisar a los
  // suscriptores que el modo ha sido cambiado
  private modoAgregar = new EventEmitter<boolean>();

    constructor(private http: HttpClient) {}

    expURL = 'http://localhost:8080/experiencia/'

    //Para traer la lista de experiencia
    getExperiencias(){
        return this.http.get<Experiencia[]>(this.expURL)
    }
    createExperiencia(experiencia: Experiencia){
        return this.http.post<Experiencia>(this.expURL, experiencia);
    }
    // Para la variable modoAgregar del EventEmitter
    setModoAgregar(editar : boolean){
        this.modoAgregar.emit(editar);
    }
    getModoAgregar(){
        return this.modoAgregar;
    }
    //----------------

    deleteExperiencia(id: number): Observable<void> {
        return this.http.delete<void>(this.expURL +`delete/${id}`);     //PRESTAR ATENCION AL TIPO DE COMILLAS INVERSAS
    }
    //Para buscar una Experiencia por id
    getExperienciaId(id:number): Observable<Experiencia>{
        return this.http.get<Experiencia>(this.expURL+`edit/${id}`);
    }
    //Para Editar una experiencia
    updateExperiencia(id: number, experiencia: Experiencia): Observable<void>{
        return this.http.put<void>(this.expURL +`edit/${id}`, experiencia);
    }
    
    // public lista(): Observable<Experiencia[]>{
    //     return this.httpClient.get<Experiencia[]>(this.expURL+ 'ver');
    // }
    // public save(experiencia: Experiencia): Observable<any>{
    //     return this.httpClient.post<any>(this.expURL+ 'crear', experiencia)
    // }

    
   
}
