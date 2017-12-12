import { Component, OnInit } from '@angular/core';
import {SchemasService} from "./shared/schemas.service";
import {Schema} from "./shared/schema";
@Component({
  selector: 'app-schemas',
  templateUrl: './schemas.component.html',
  styleUrls: ['./schemas.component.scss']
})
export class SchemasComponent implements OnInit {


  public schemas: Schema[] = [];

  constructor(private schemasService: SchemasService) { }

  ngOnInit() {
    this.schemasService.getSchemas()
      .subscribe(data => this.schemas = data);
  }

  deleteSchema(schema){
    if (confirm("Are you sure you want to delete " + schema.schemaName + "?")) {
      var index = this.schemas.indexOf(schema);
      this.schemas.splice(index, 1);

      this.schemasService.deleteSchema(schema.schemaId)
        .subscribe(null,
          err => {
            alert("Could not delete schema.");
            // Revert the view back to its original state
            this.schemas.splice(index, 0, schema);
          });
    }
  }
}
