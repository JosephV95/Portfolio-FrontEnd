import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillBack } from 'src/app/model/skill-back';
import { SkillFront } from 'src/app/model/skill-front';
import { SkillSoft } from 'src/app/model/skill-soft';
import { SkillBackService } from 'src/app/servicio/skill-back.service';
import { SkillFrontService } from 'src/app/servicio/skill-front.service';
import { SkillSoftService } from 'src/app/servicio/skill-soft.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  //para parte Front
  skillsFront: SkillFront[] = [];
  @Input()
  modSkFront: boolean = false;

  //para parte Back
  skillsBack: SkillBack[] = [];
  @Input()
  modSkBack: boolean = false;

  //para parte Soft
  skillsSoft: SkillSoft[] = [];
  @Input()
  modSkSoft: boolean = false;

  constructor(private sfService: SkillFrontService, private sbService: SkillBackService, private ssService: SkillSoftService, private tokenService: TokenService, private router: Router) {
    sfService.getModoAddSF().subscribe((data: boolean) =>{this.modSkFront = data});
    sbService.getModoAddSB().subscribe((data: boolean) =>{this.modSkBack = data});
    ssService.getModoAddSS().subscribe((data: boolean) =>{this.modSkSoft = data})
  }

  isLogged = false;

  ngOnInit(): void {
    //para parte Front
    this.sfService.getSkillsFront().subscribe(data =>{this.skillsFront=data});
    //para parte Back
    this.sbService.getSkillsBack().subscribe(data =>{this.skillsBack=data});
    //para parte Soft
    this.ssService.getSkillsSoft().subscribe(data =>{this.skillsSoft=data});

    if(this.tokenService.getToken()){
      this.isLogged = true ;
    }else {
      this.isLogged = false;
     }
  }

  //Parte Front
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
    
    // this.ngOnInit();
    alert(`¡La skill se borro con Exito!`);
    location.reload();
  }

   //Parte Back
   nuevoSB(){
    this.modSkBack = true;
  }
  editarSB(id: number):void{
    this.router.navigate([`sb-edit/${id}`]);
  }
  borrarSB(id: number):void{
    console.log(id);
    this.sbService.deleteSkillB(id).subscribe(() =>{
    })
    
    // this.ngOnInit();
    alert(`¡La skill se borro con Exito!`);
    location.reload();
  }

  //Parte Soft
  nuevoSS(){
    this.modSkSoft = true;
  }
  editarSS(id: number):void{
    this.router.navigate([`ss-edit/${id}`]);
  }
  borrarSS(id: number):void{
    console.log(id);
    this.ssService.deleteSkillS(id).subscribe(() =>{
    })
    
    // this.ngOnInit();
    alert(`¡La skill se borro con Exito!`);
    location.reload();
  }
}
