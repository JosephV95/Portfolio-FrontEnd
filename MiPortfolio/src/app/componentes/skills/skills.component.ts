import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillFront } from 'src/app/model/skill-front';
import { SkillFrontService } from 'src/app/servicio/skill-front.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsFront: SkillFront[] = [];
  
  @Input()
  modSkFront: boolean = false;

  constructor(private sfService: SkillFrontService, private tokenService: TokenService, private router: Router) {
    sfService.getModoAddSF().subscribe((data: boolean) =>{this.modSkFront = data})
  }

  isLogged = false;

  ngOnInit(): void {
    this.sfService.getSkillsFront().subscribe(data =>{this.skillsFront=data});

    if(this.tokenService.getToken()){
      this.isLogged = true ;
    }else {
      this.isLogged = false;
     }
  }
  nuevoSF(){
    this.modSkFront = true;
  }
  editarSF(id: number):void{
    this.router.navigate([`sf-edit/${id}`]);
  }
  borrarSF(id: number):void{
    console.log(id);
    this.sfService.deleteSkillF(id).subscribe(() =>{
    })
    alert(`¡La skill se borro con Exito!`);
    this.ngOnInit();
  }

}
