import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillSoft } from 'src/app/model/skill-soft';
import { SkillSoftService } from 'src/app/servicio/skill-soft.service';

@Component({
  selector: 'app-edit-skill-soft',
  templateUrl: './edit-skill-soft.component.html',
  styleUrls: ['./edit-skill-soft.component.css']
})
export class EditSkillSoftComponent implements OnInit {

  id: number;
  form: FormGroup;

  constructor(private ssService: SkillSoftService, private activatedRouter: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.id = Number(activatedRouter.snapshot.paramMap.get('id'));  //Setteo el id como un number
    console.log(this.id);

    this.form = this.fb.group({
      nomSkillS: ['', Validators.required],
      icoSkillS: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getProyecto(this.id);
  }
  getProyecto(id: number){
    this.ssService.getSkillSId(id).subscribe((data:SkillSoft) => {
      console.log(data);
      this.form.setValue({
        nomSkillS: data.nomSkillS,
        icoSkillS: data.icoSkillS
      })
    })
  }
  actualizar(){
    const skillSoft: SkillSoft = {
      nomSkillS: this.form.value.nomSkillS,
      icoSkillS: this.form.value.icoSkillS
    };
    skillSoft.id = this.id;
    this.ssService.updateSkillS(this.id, skillSoft).subscribe(data =>{
      alert(`¡La Skill ${skillSoft.nomSkillS} se actualizo con exito!`);
      this.router.navigate(['/'])
    })
  }

}
