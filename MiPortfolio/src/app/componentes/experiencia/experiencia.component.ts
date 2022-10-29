import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicio/experiencia-service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[] =[];   //se le agrega un array
  @Input()
  modoAgregar: boolean = false;

  constructor(private expService: ExperienciaService, private tokenService: TokenService   ,private router: Router) { 
    expService.getModoAgregar().subscribe((data:boolean)=>{this.modoAgregar =data}) //se agrega en el constuctor somo en el ejemplo
  }

  isLogged = false;

  // experiencia: Experiencia = new Experiencia("","","");
  
  ngOnInit(): void {
    this.expService.getExperiencias().subscribe(data =>{this.experiencias=data});
    
    if(this.tokenService.getToken()){
      this.isLogged = true ;
    }else {
      this.isLogged = false;
     }
  }
 
  nuevo(){
    this.modoAgregar = true;
  }
 

  editarExp(id: number):void{
    console.log(id);
    this.router.navigate([`edit/${id}`]);
  }
  borrarExp(id: number):void{
    console.log(id);
    this.expService.deleteExperiencia(id).subscribe(() =>{
      // this.router.navigate(['']);
    })
    alert(`¡La Experiencia se borro con Exito!`);
    this.ngOnInit();
  }
  

}

