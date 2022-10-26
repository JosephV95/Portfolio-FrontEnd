import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicio/proyecto.service';

@Component({
  selector: 'app-pro-edit',
  templateUrl: './pro-edit.component.html',
  styleUrls: ['./pro-edit.component.css']
})
export class ProEditComponent implements OnInit {

  id: number;
  form: FormGroup;

  constructor(private proService: ProyectoService, private activatedRouter: ActivatedRoute, private router: Router, private fb: FormBuilder) { 
    this.id = Number(activatedRouter.snapshot.paramMap.get('id'));  //Setteo el id como un number
    console.log(this.id);

    this.form = this.fb.group({
      nomPro: ['', Validators.required],
      descPro: ['', Validators.required],
      fotoPro: ['', Validators.required],
      linkPro: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getProyecto(this.id);
  }
  getProyecto(id: number){
    this.proService.getProyectoId(id).subscribe((data:Proyecto) => {
      console.log(data);
      this.form.setValue({
        nomPro: data.nomPro,
        descPro: data.descPro,
        fotoPro: data.fotoPro,
        linkPro: data.linkPro,
      })
    })
  }

  actualizar(){
    const proyecto: Proyecto = {
      nomPro: this.form.value.nomPro,
      descPro: this.form.value.descPro,
      fotoPro: this.form.value.fotoPro,
      linkPro: this.form.value.linkPro
    };
    proyecto.id = this.id;
    this.proService.updateProyecto(this.id, proyecto).subscribe(data =>{
      alert(`¡El proyecto ${proyecto.nomPro} se actualizo con exito!`);
      this.router.navigate(['/'])
    })
  }

}
