import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillFront } from 'src/app/model/skill-front';
import { SkillFrontService } from 'src/app/servicio/skill-front.service';

@Component({
  selector: 'app-edit-skill-front',
  templateUrl: './edit-skill-front.component.html',
  styleUrls: ['./edit-skill-front.component.css']
})
export class EditSkillFrontComponent implements OnInit {

  id: number;
  form: FormGroup;

  constructor(private sfService: SkillFrontService, private activatedRouter: ActivatedRoute, private router: Router, private fb: FormBuilder) { 
    this.id = Number(activatedRouter.snapshot.paramMap.get('id'));  //Setteo el id como un number
    console.log(this.id);

    this.form = this.fb.group({
      nomSkillF: ['', Validators.required],
      icoSkillF: ['', Validators.required],
      porcSkillF: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getProyecto(this.id);
  }
  getProyecto(id: number){
    this.sfService.getSkillFId(id).subscribe((data:SkillFront) => {
      console.log(data);
      this.form.setValue({
        nomSkillF: data.nomSkillF,
        icoSkillF: data.icoSkillF,
        porcSkillF: data.porcSkillF,
      })
    })
  }
  actualizar(){
    const skillFront: SkillFront = {
      nomSkillF: this.form.value.nomSkillF,
      icoSkillF: this.form.value.icoSkillF,
      porcSkillF: this.form.value.porcSkillF
    };
    skillFront.id = this.id;
    this.sfService.updateSkillF(this.id, skillFront).subscribe(data =>{
      alert(`¡La Skill ${skillFront.nomSkillF} se actualizo con exito!`);
      this.router.navigate(['/'])
    })
  }

}
