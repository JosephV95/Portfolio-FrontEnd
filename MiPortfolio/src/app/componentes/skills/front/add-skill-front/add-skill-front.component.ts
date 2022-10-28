import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillFront } from 'src/app/model/skill-front';
import { SkillFrontService } from 'src/app/servicio/skill-front.service';

@Component({
  selector: 'app-add-skill-front',
  templateUrl: './add-skill-front.component.html',
  styleUrls: ['./add-skill-front.component.css']
})
export class AddSkillFrontComponent implements OnInit {

  form: FormGroup;

  constructor(private sfService: SkillFrontService, private router: Router, private fb: FormBuilder) { 
    this.form = this.fb.group({
      nomSkillF: ['', Validators.required],
      icoSkillF: ['', Validators.required],
      porcSkillF: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  guardar(){
    console.log("Skill Agregada");
    const skillFront: SkillFront = {
      nomSkillF: this.form.value.nomSkillF,
      icoSkillF: this.form.value.icoSkillF,
      porcSkillF: this.form.value.porcSkillF
    };
    this.sfService.createSkillF(skillFront)
     .subscribe(data=>{
       alert(`¡La Skill ${skillFront.nomSkillF} se agrego con Exito!`);
       this.sfService.setModoAddSF(false);
       this.router.navigate(['']);
       location.reload(); //con este comando recargo la pagina
     });
     
     console.log(this.form);
  }
  cancelar(): void{
    this.sfService.setModoAddSF(false);
  }

}
