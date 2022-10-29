import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillBack } from 'src/app/model/skill-back';
import { SkillBackService } from 'src/app/servicio/skill-back.service';

@Component({
  selector: 'app-edit-skill-back',
  templateUrl: './edit-skill-back.component.html',
  styleUrls: ['./edit-skill-back.component.css']
})
export class EditSkillBackComponent implements OnInit {

  id: number;
  form: FormGroup;

  constructor(private sbService: SkillBackService, private activatedRouter: ActivatedRoute, private router: Router, private fb: FormBuilder) { 
    this.id = Number(activatedRouter.snapshot.paramMap.get('id'));  //Setteo el id como un number
    console.log(this.id);

    this.form = this.fb.group({
      nomSkillB: ['', Validators.required],
      icoSkillB: ['', Validators.required],
      porcSkillB: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getProyecto(this.id);
  }
  getProyecto(id: number){
    this.sbService.getSkillBId(id).subscribe((data:SkillBack) => {
      console.log(data);
      this.form.setValue({
        nomSkillB: data.nomSkillB,
        icoSkillB: data.icoSkillB,
        porcSkillB: data.porcSkillB,
      })
    })
  }
  actualizar(){
    const skillBack: SkillBack = {
      nomSkillB: this.form.value.nomSkillB,
      icoSkillB: this.form.value.icoSkillB,
      porcSkillB: this.form.value.porcSkillB
    };
    skillBack.id = this.id;
    this.sbService.updateSkillB(this.id, skillBack).subscribe(data =>{
      alert(`¡La Skill ${skillBack.nomSkillB} se actualizo con exito!`);
      this.router.navigate(['/'])
    })
  }

}
