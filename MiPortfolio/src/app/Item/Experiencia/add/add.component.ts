import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicio/experiencia-service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  experiencia: Experiencia = new Experiencia("","","");
  
  constructor( private expService: ExperienciaService,private router: Router) { }

  ngOnInit(): void {
  }

  guardar():void{
    
    this.expService.createExperiencia(this.experiencia)
    .subscribe(data=>{
      alert("¡Se agrego la Experiencia con Exito!");
      this.router.navigate(['/']);
    })
  }

}
