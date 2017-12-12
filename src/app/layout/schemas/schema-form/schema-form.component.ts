import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Schema } from '../shared/schema';
import { SchemasService } from '../shared/schemas.service';
@Component({
  selector: 'app-schema-form',
  templateUrl: './schema-form.component.html',
  styleUrls: ['./schema-form.component.scss']
})
export class SchemaFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  schema: Schema = new Schema();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private schemasService: SchemasService
  ) {
    this.form = formBuilder.group({
      schemaId: [''],
      schemaName: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      schemaCycles: [''],
      schemaIntervalCycles: [''],
      schemaTotalDays: [''],
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];
//      console.log('on init')
 //     console.log(id)
      this.title = id ? 'Editar Esquema' : 'Nuevo Esquema';

      if (!id)
        return;

      this.schemasService.getSchema(id)
        .subscribe(
          schema => this.schema = schema,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    var result,
        schemaValue = this.form.value;
        console.log(schemaValue.schemaId)
    if (schemaValue.schemaId){
  //  console.log('update p')
      result = this.schemasService.updateSchema(schemaValue);
    } else {
 //   console.log('new p')

      result = this.schemasService.addSchema(schemaValue);
    }

    result.subscribe(data => this.router.navigate(['schemas']));
  }

}
