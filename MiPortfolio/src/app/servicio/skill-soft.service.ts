import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { SkillSoft } from "../model/skill-soft";

@Injectable({
  providedIn: 'root'
})
export class SkillSoftService {

  private modSkSoft = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  ssUrl = 'https://josevilteportfolio.herokuapp.com/skill-soft/'

  getSkillsSoft(){
    return this.http.get<SkillSoft[]>(this.ssUrl)
  }
  createSkillS(skillSoft: SkillSoft){
    return this.http.post<SkillSoft>(this.ssUrl, skillSoft);
  }
  // Para la variable modoAgregar del EventEmitter
  setModoAddSS(editar : boolean){
    this.modSkSoft.emit(editar);
  }
  getModoAddSS(){
    return this.modSkSoft;
  }
  deleteSkillS(id: number): Observable<void> {
    return this.http.delete<void>(this.ssUrl +`delete/${id}`);
  }
  getSkillSId(id:number): Observable<SkillSoft>{
      return this.http.get<SkillSoft>(this.ssUrl+`ss-edit/${id}`);
  }
  updateSkillS(id: number, skillSoft: SkillSoft): Observable<void>{
      return this.http.put<void>(this.ssUrl +`ss-edit/${id}`, skillSoft);
  }
}
