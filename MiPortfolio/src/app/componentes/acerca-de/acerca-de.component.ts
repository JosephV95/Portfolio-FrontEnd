import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicio/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit { 
//incializo el objeto persona // y luego dejo los campos del constructor vacio
  persona: persona = new persona("","","","","",""); 
  editarNombre= false;
                //PersonaService se importa del persona.model.ts
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void { //Ahora suscribo a los cambios que puedan haber
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }
  
  logged = false;
  editItem(){
    this.logged=true;
  }
  
  cancelEdit(){
    this.logged = false;
  }
  editName(){
    this.editarNombre = true;
  }
  cancelName(){
    this.editarNombre = false;
  }

  save(){
    
  }
}

