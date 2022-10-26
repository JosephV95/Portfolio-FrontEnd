import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicio/proyecto.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];
  @Input()
  modoAgregarPro: boolean = false;

  constructor(private proService: ProyectoService, private tokenService: TokenService, private router: Router) { 
    proService.getModoAgregarPro().subscribe((data:boolean)=>{this.modoAgregarPro =data}) 
  }

  isLogged = false;

  ngOnInit(): void {
    this.proService.getProyectos().subscribe(data =>{this.proyectos=data});

    if(this.tokenService.getToken()){
      this.isLogged = true ;
    }else {
      this.isLogged = false;
     }
  }
  nuevo(){
    this.modoAgregarPro = true;
  }
  editarPro(id: number):void{
    this.router.navigate([`pro-edit/${id}`]);
  }
  borrarPro(id: number):void{
    console.log(id);
    this.proService.deleteProyecto(id).subscribe(() =>{
    })
    alert(`¡El Proyecto se borro con Exito!`);
    this.ngOnInit();
  }



}
