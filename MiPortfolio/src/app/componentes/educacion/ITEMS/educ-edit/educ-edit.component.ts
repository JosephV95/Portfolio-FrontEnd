import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicio/educacion-service';

@Component({
  selector: 'app-educ-edit',
  templateUrl: './educ-edit.component.html',
  styleUrls: ['./educ-edit.component.css']
})
export class EducEditComponent implements OnInit {

  id: number;
  form: FormGroup;

  constructor(private eduService: EducacionService, private activatedRouter: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.id = Number(activatedRouter.snapshot.paramMap.get('id'));  //Setteo el id como un number

    this.form = this.fb.group({
      nomEdu: ['', Validators.required],
      instEdu: ['', Validators.required],
      aniosEdu: ['', Validators.required],
      descEdu: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    this.getEducacion(this.id);
  }
  //Con esto recibire get para los campos de los Inputs
  getEducacion(id: number){
    this.eduService.getEducacionId(id).subscribe((data:Educacion) =>{
      console.log(data);
      this.form.setValue({
        nomEdu: data.nomEdu,
        instEdu: data.instEdu,
        aniosEdu: data.aniosEdu,
        descEdu: data.descEdu
      })
    })
  }
  actualizar(){
    const educacion: Educacion = {
      nomEdu: this.form.value.nomEdu,
      instEdu: this.form.value.instEdu,
      aniosEdu: this.form.value.aniosEdu,
      descEdu: this.form.value.descEdu
    };
    educacion.id = this.id;
    this.eduService.updateEducacion(this.id, educacion).subscribe(data =>{
      alert(`¡La Educación ${educacion.nomEdu} se actualizo con exito!`);
      this.router.navigate(['/'])
    })
  }

}
