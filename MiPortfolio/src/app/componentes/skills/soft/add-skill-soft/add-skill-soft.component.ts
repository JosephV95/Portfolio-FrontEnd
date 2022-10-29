import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillSoft } from 'src/app/model/skill-soft';
import { SkillSoftService } from 'src/app/servicio/skill-soft.service';

@Component({
  selector: 'app-add-skill-soft',
  templateUrl: './add-skill-soft.component.html',
  styleUrls: ['./add-skill-soft.component.css']
})
export class AddSkillSoftComponent implements OnInit {

  form: FormGroup;

  constructor(private ssService: SkillSoftService, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      nomSkillS: ['', Validators.required],
      icoSkillS: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  guardar(){
    console.log("Skill Agregada");
    const skillSoft: SkillSoft = {
      nomSkillS: this.form.value.nomSkillS,
      icoSkillS: this.form.value.icoSkillS
    };
    this.ssService.createSkillS(skillSoft)
     .subscribe(data=>{
       alert(`¡La Skill ${skillSoft.nomSkillS} se agrego con Exito!`);
       this.ssService.setModoAddSS(false);
       this.router.navigate(['']);
       location.reload(); //con este comando recargo la pagina
     });
     
     console.log(this.form);
  }
  cancelar(): void{
    this.ssService.setModoAddSS(false);
  }

}
