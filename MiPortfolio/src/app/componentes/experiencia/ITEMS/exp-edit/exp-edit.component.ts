import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicio/experiencia-service';

@Component({
  selector: 'app-exp-edit',
  templateUrl: './exp-edit.component.html',
  styleUrls: ['./exp-edit.component.css']
})
export class ExpEditComponent implements OnInit {
  // experiencia: Experiencia = null ;
  id: number;
 
  form: FormGroup;
  
  constructor(private expService: ExperienciaService, private activatedRouter: ActivatedRoute, private router: Router, private fb: FormBuilder) { 
    this.id = Number(activatedRouter.snapshot.paramMap.get('id'));  //Setteo el id como un number
    console.log(this.id);

    this.form = this.fb.group({
      nomExp: ['', Validators.required],
      aniosExp: ['', Validators.required],
      descripcionExp: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getExperiencia(this.id);
  }

  //Con esto recibire get para los campos de los Inputs
  getExperiencia(id: number){
    this.expService.getExperienciaId(id).subscribe((data:Experiencia) =>{
      console.log(data);
      this.form.setValue({
        nomExp: data.nomExp,
        aniosExp: data.aniosExp,
        descripcionExp: data.descripcionExp
      })
    })
  }
  actualizar(){
    const experiencia: Experiencia = {nomExp: this.form.value.nomExp,
      aniosExp: this.form.value.aniosExp,
      descripcionExp: this.form.value.descripcionExp
    };
    experiencia.id = this.id;
    this.expService.updateExperiencia(this.id, experiencia).subscribe(data =>{
      alert(`¡La Experiencia ${experiencia.nomExp} se Actualizo con exito!`);
      this.router.navigate(['/'])
    })
  }

}
