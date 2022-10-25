import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicio/experiencia-service';

@Component({
  selector: 'app-exp-edit',
  templateUrl: './exp-edit.component.html',
  styleUrls: ['./exp-edit.component.css']
})
export class ExpEditComponent implements OnInit {
  experiencia: Experiencia = null ;
  id: number;
 

  constructor(private expService: ExperienciaService, private activatedRouter: ActivatedRoute, private router: Router) { 
    this.id = Number(activatedRouter.snapshot.paramMap.get('id'));
    console.log(this.id)
  }

  ngOnInit(): void {
    this.getExperiencia(this.id);
    // const id = this.activatedRouter.snapshot.params['id'];
    // this.expService.getExperienciaId(id).subscribe(data=>{ this.experiencia = data;
    // }, err => { 
    //   alert("Error al modificar"); 
    //   this.router.navigate(['']); })
  }
  editar(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.expService.updateExperiencia(id, this.experiencia).subscribe(
      data=>{ this.router.navigate(['']);
    },err => {alert("Error al editar");
              this.router.navigate(['']);
            }
    )
  }

  getExperiencia(id: number){
    this.expService.getExperienciaId(id).subscribe((data:Experiencia) =>{
      console.log(data);
      // this.experiencia.patchValue(
      //   nomExp = data.nomExp
      // );
    })
  }
  // editar(){
  //   const id = localStorage
  //   this.expService.update(id, this.experiencia).subscribe(
  //     data=>{this.router.navigate(['']);}, err=>{alert('Error al modificar');
  //   }
  //   )
  // }

}
