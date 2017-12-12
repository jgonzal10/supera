import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Diagnose } from '../shared/diagnose';
import { DiagnosisService } from '../shared/diagnosis.service';
@Component({
  selector: 'app-diagnose-form',
  templateUrl: './diagnose-form.component.html',
  styleUrls: ['./diagnose-form.component.scss']
})
export class DiagnoseFormComponent implements OnInit {


  form: FormGroup;
  title: string;
  diagnose: Diagnose = new Diagnose();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private diagnosisService: DiagnosisService
  ) {
    this.form = formBuilder.group({
      diagnosisId: [''],
      diagnosisName: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],

    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Editar Diagnostico' : 'Nuevo Diagnostico';

      if (!id)
        return;
      this.diagnosisService.getDiagnose(id)
        .subscribe(
          diagnose => this.diagnose = diagnose,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });

   // console.log("this.diagnose")
   // console.log(this.diagnose)
  }

  save() {
    var result,
        diagnoseValue = this.form.value;
    //console.log(diagnoseValue)
    if (diagnoseValue.diagnosisId){
   // console.log('editar diagnosito')

      result = this.diagnosisService.updateDiagnose(diagnoseValue);
    } else {
  //  console.log('nuevo diagnosito')

      result = this.diagnosisService.addDiagnose(diagnoseValue);
    }

    result.subscribe(data => this.router.navigate(['diagnosis']));
  }

}
