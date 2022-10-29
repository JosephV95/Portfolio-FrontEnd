import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona';
import { PersonaService } from 'src/app/servicio/persona.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit { 
  personas: Persona = new Persona("","","","","","");
  // @Input()
  // modoEdit: boolean = false;

//incializo el objeto persona // y luego dejo los campos del constructor vacio
  // persona: persona = new persona("","","","","",""); 
  
  constructor(public perService: PersonaService,private tokenService: TokenService, private router: Router) {
    // perService.getModoEdit().subscribe((data:boolean)=>{this.modoEdit =data})
   }
  
  isLogged = false;

  ngOnInit(): void { //Ahora suscribo a los cambios que puedan haber
    this.perService.getPersonaId(1).subscribe(data => {this.personas = data});

    if(this.tokenService.getToken()){
      this.isLogged = true ;
    }else {
      this.isLogged = false;
     }

     // De esta manera puedo definir los valores de CSS mediante Javascript
    // let element = document.getElementById('encabezado');
    // element.style.setProperty('background-image', 'url(personas.fondo_url)');
  }
  
  editName():void{
    this.router.navigate([`editar/1`]);
   }
 
  
  
  
  
}

