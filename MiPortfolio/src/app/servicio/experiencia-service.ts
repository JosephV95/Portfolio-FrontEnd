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

    getPersonas(){
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
        return this.http.delete<void>(this.expURL +`delete/${id}`);
        
    }
    getExperienciaId(id:number): Observable<Experiencia>{
        return this.http.get<Experiencia>(this.expURL+`edit/${id}`);
    }
    updateExperiencia(id: number, experiencia: Experiencia){
        return this.http.put<Experiencia>(this.expURL +`editar/${id}`, experiencia);
    }
    // public lista(): Observable<Experiencia[]>{
    //     return this.httpClient.get<Experiencia[]>(this.expURL+ 'ver');
    // }
    
    // public detail(id:number): Observable<Experiencia>{
    //     return this.http.get<Experiencia>(this.expURL+ `traer/${id}`); //PRSESTAR ATENCION AL TIPO DE COMILLAS INVERSAS
    // }
    // public save(experiencia: Experiencia): Observable<any>{
    //     return this.httpClient.post<any>(this.expURL+ 'crear', experiencia)
    // }

    //  public update(id:number, experiencia: Experiencia): Observable<any>{
    //      return this.http.put<any>(this.expURL+ `edit/${id}`, experiencia);  //PRSESTAR ATENCION AL TIPO DE COMILLAS INVERSAS
    //  }
    // public delete(id:number): Observable<any>{
    //     return this.httpClient.delete<any>(this.expURL+ `borrar/${id}`);
    // }
}
