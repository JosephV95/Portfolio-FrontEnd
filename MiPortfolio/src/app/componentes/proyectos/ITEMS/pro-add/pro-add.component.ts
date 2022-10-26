import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicio/proyecto.service';

@Component({
  selector: 'app-pro-add',
  templateUrl: './pro-add.component.html',
  styleUrls: ['./pro-add.component.css']
})
export class ProAddComponent implements OnInit {

  form: FormGroup;

  constructor(private proService: ProyectoService, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      nomPro: ['', Validators.required],
      descPro: ['', Validators.required],
      linkPro: ['', Validators.required],
      fotoPro: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  guardar(){
    console.log("Proyecto Agregada");
    const proyecto: Proyecto = {
      nomPro: this.form.value.nomPro,
      descPro: this.form.value.descPro,
      linkPro: this.form.value.linkPro,
      fotoPro: this.form.value.fotoPro
    };
    this.proService.createProyecto(proyecto)
     .subscribe(data=>{
       alert(`¡El Proyecto ${proyecto.nomPro} se agrego con Exito!`);
       this.proService.setModoAgregarPro(false);
       this.router.navigate(['']);
       location.reload(); //con este comando recargo la pagina y se cargar las experiencias
     });
     console.log(this.form);
  }
  cancelar(): void{
    this.proService.setModoAgregarPro(false);
  }

}
