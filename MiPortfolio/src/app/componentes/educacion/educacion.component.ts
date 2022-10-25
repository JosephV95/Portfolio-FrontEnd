import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicio/educacion-service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educaciones: Educacion[] = [];
  @Input()
  modoAgregarEdu: boolean = false;

  constructor( private eduService: EducacionService, private tokenService: TokenService   ,private router: Router) { 
    eduService.getModoAgregarEdu().subscribe((data:boolean)=>{this.modoAgregarEdu =data})  
  }
  isLogged = false;

  ngOnInit(): void {
    this.eduService.getEducaciones().subscribe(data =>{this.educaciones=data});
    
    if(this.tokenService.getToken()){
      this.isLogged = true ;
    }else {
      this.isLogged = false;
     }
  }
  nuevo(){
    this.modoAgregarEdu = true;
  }
  editarEdu(id: number):void{
    console.log(id);
    this.router.navigate([`edu-edit/${id}`]);
  }
  borrarEdu(id: number):void{
    console.log(id);
    this.eduService.deleteEducacion(id).subscribe(() =>{
      // this.router.navigate(['']);
    })
    alert(`¡La Educacion se borro con Exito!`);
    this.ngOnInit();
  }

}
