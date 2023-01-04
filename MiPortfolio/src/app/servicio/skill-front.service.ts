import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from "rxjs";
import { SkillFront } from "../model/skill-front";

@Injectable({
  providedIn: 'root'
})
export class SkillFrontService {

  private modSkFront = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  sfUrl = 'https://josevilteportfolio.onrender.com/skill-front/'

  getSkillsFront(){
    return this.http.get<SkillFront[]>(this.sfUrl)
  }
  createSkillF(skillFront: SkillFront){
    return this.http.post<SkillFront>(this.sfUrl, skillFront);
  }
  // Para la variable modoAgregar del EventEmitter
  setModoAddSF(editar : boolean){
    this.modSkFront.emit(editar);
  }
  getModoAddSF(){
    return this.modSkFront;
  } 

  deleteSkillF(id: number): Observable<void> {
    return this.http.delete<void>(this.sfUrl +`delete/${id}`);
  }
  getSkillFId(id:number): Observable<SkillFront>{
      return this.http.get<SkillFront>(this.sfUrl+`sf-edit/${id}`);
  }
  updateSkillF(id: number, skillFront: SkillFront): Observable<void>{
      return this.http.put<void>(this.sfUrl +`sf-edit/${id}`, skillFront);
  }
}
