import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicio/educacion-service';

@Component({
  selector: 'app-educ-add',
  templateUrl: './educ-add.component.html',
  styleUrls: ['./educ-add.component.css']
})
export class EducAddComponent implements OnInit {

  form: FormGroup;

  constructor(private eduService: EducacionService, private router: Router, private fb: FormBuilder) { 
    this.form = this.fb.group({
      nomEdu: ['', Validators.required],
      instEdu: ['', Validators.required],
      aniosEdu: ['', Validators.required],
      descEdu: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  guardar(){
    console.log("Educacion Agregada");
    const educacion: Educacion = {nomEdu: this.form.value.nomEdu,
                                  instEdu: this.form.value.instEdu,
                                  aniosEdu: this.form.value.aniosEdu,
                                  descEdu: this.form.value.descEdu
    };
    this.eduService.createEducacion(educacion)
     .subscribe(data=>{
       alert(`¡La Educacion ${educacion.nomEdu} se agrego con Exito!`);
       this.eduService.setModoAgregarEdu(false);
       this.router.navigate(['']);
       location.reload(); //con este comando recargo la pagina y se cargar las experiencias
     });
     console.log(this.form);
  }
  cancelar(): void{
    this.eduService.setModoAgregarEdu(false);
  }

}
