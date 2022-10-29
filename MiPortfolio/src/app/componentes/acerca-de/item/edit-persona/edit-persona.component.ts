import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona';
import { PersonaService } from 'src/app/servicio/persona.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {

  id: number;
  form: FormGroup;

  constructor(private perService: PersonaService, private activatedRouter: ActivatedRoute, private router: Router, private fb: FormBuilder) { 
    this.id = Number(activatedRouter.snapshot.paramMap.get('id'));

    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      titulo: ['', Validators.required],
      foto_url: ['', Validators.required],
      fondo_url: ['', Validators.required],
      sobre_mi: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getPersona(this.id);
    
  }
  getPersona(id: number){
    this.perService.getPersonaId(id).subscribe((data:Persona) => {
      this.form.setValue({
        nombre: data.nombre,
        apellido: data.apellido,
        titulo: data.titulo,
        foto_url: data.foto_url,
        fondo_url: data.fondo_url,
        sobre_mi: data.sobre_mi
      })
    })
  }
  actualizar(){
    const persona: Persona = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      titulo: this.form.value.titulo,
      foto_url: this.form.value.foto_url,
      fondo_url: this.form.value.fondo_url,
      sobre_mi: this.form.value.sobre_mi
    };
    persona.id = this.id;
    this.perService.updatePersona(this.id, persona).subscribe(data =>{
      alert(`¡La Persona ${persona.nombre} se actualizo con exito!`);
      this.router.navigate(['/'])
    })
  }
  cancelar(){
    this.perService.setModoEdit(false);
  }

}
