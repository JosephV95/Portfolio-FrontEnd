import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicio/experiencia-service';


@Component({
  selector: 'app-exp-add',
  templateUrl: './exp-add.component.html',
  styleUrls: ['./exp-add.component.css']
})
export class ExpAddComponent implements OnInit {

  form: FormGroup;

  constructor(private expService: ExperienciaService, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      nomExp: ['', Validators.required],
      aniosExp: ['', Validators.required],
      descripcionExp: ['', Validators.required]
    })
   }
  
  experiencia: Experiencia = new Experiencia("","","");

  ngOnInit(): void {
  }
  
  guardar(){
    console.log("Experiencia Agregada");
    const experiencia: Experiencia = {nomExp: this.form.value.nomExp,
                                      aniosExp: this.form.value.aniosExp,
                                      descripcionExp: this.form.value.descripcionExp
    };
    this.expService.createExperiencia(experiencia)
     .subscribe(data=>{
       alert(`¡La Experiencia ${experiencia.nomExp} se agrego con Exito!`);
       this.expService.setModoAgregar(false);
       this.router.navigate(['']);
       location.reload(); //con este comando recargo la pagina y se cargar las experiencias
     });
     console.log(this.form);
  }
  cancelar(): void{
    this.expService.setModoAgregar(false);
  }

  
}
