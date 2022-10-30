import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { SkillBack } from "../model/skill-back";

@Injectable({
  providedIn: 'root'
})
export class SkillBackService {

  private modSkBack = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  sbUrl = 'https://josevilteportfolio.herokuapp.com/skill-back/'

  getSkillsBack(){
    return this.http.get<SkillBack[]>(this.sbUrl)
  }
  createSkillB(skillBack: SkillBack){
    return this.http.post<SkillBack>(this.sbUrl, skillBack);
  }
  // Para la variable modoAgregar del EventEmitter
  setModoAddSB(editar : boolean){
    this.modSkBack.emit(editar);
  }
  getModoAddSB(){
    return this.modSkBack;
  }

  deleteSkillB(id: number): Observable<void> {
    return this.http.delete<void>(this.sbUrl +`delete/${id}`);
  }
  getSkillBId(id:number): Observable<SkillBack>{
      return this.http.get<SkillBack>(this.sbUrl+`sb-edit/${id}`);
  }
  updateSkillB(id: number, skillBack: SkillBack): Observable<void>{
      return this.http.put<void>(this.sbUrl +`sb-edit/${id}`, skillBack);
  }
}
