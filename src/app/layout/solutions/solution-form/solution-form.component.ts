import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Solution } from '../shared/solution';
import { SolutionsService } from '../shared/solutions.service';
@Component({
  selector: 'app-solution-form',
  templateUrl: './solution-form.component.html',
  styleUrls: ['./solution-form.component.scss']
})
export class SolutionFormComponent implements OnInit {
  form: FormGroup;
  title: string;
  solution: Solution = new Solution();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private solutionsService: SolutionsService
  ) {
    this.form = formBuilder.group({
      solutionId: [''],
      genericName: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      comercialName: [''],
      container: [''],
      concentration: [''],
      unities: [''],
      volume: [''],

    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];
//      console.log('on init')
  //    console.log(id)
      this.title = id ? 'Editar Solucion' : 'Nuevo Solucion';

      if (!id)
        return;

      this.solutionsService.getSolution(id)
        .subscribe(
          solution => this.solution = solution,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    var result,
        solutionValue = this.form.value;

    if (solutionValue.solutionId){
 //   console.log('update solutionId')
      result = this.solutionsService.updateSolution(solutionValue);
    } else {
//    console.log('new solutionId')

      result = this.solutionsService.addSolution(solutionValue);
    }

    result.subscribe(data => this.router.navigate(['solutions']));
  }

}
