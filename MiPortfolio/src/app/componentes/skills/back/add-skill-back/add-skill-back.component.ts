import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillBack } from 'src/app/model/skill-back';
import { SkillBackService } from 'src/app/servicio/skill-back.service';

@Component({
  selector: 'app-add-skill-back',
  templateUrl: './add-skill-back.component.html',
  styleUrls: ['./add-skill-back.component.css']
})
export class AddSkillBackComponent implements OnInit {

  form: FormGroup;

  constructor(private sbService: SkillBackService, private router: Router, private fb: FormBuilder) { 
    this.form = this.fb.group({
      nomSkillB: ['', Validators.required],
      icoSkillB: ['', Validators.required],
      porcSkillB: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  guardar(){
    console.log("Skill Agregada");
    const skillBack: SkillBack = {
      nomSkillB: this.form.value.nomSkillB,
      icoSkillB: this.form.value.icoSkillB,
      porcSkillB: this.form.value.porcSkillB
    };
    this.sbService.createSkillB(skillBack)
     .subscribe(data=>{
       alert(`¡La Skill ${skillBack.nomSkillB} se agrego con Exito!`);
       this.sbService.setModoAddSB(false);
       this.router.navigate(['']);
       location.reload(); //con este comando recargo la pagina
     });
     
     console.log(this.form);
  }
  cancelar(): void{
    this.sbService.setModoAddSB(false);
  }

}
