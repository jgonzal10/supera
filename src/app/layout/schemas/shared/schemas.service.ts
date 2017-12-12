import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Schema} from "./schema";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SchemasService {
  private url: string = "http://localhost:9003/schemas";

  constructor(private http: Http) { }

  getSchemas(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getSchema(id){
    return this.http.get("http://localhost:9003/schema/"+id)
      .map(res => res.json());
  }

  addSchema(schema){
 // console.log('addd p')
 // console.log(schema)

    return this.http.get("http://localhost:9003/schemanew/"+schema.schemaName+"/"+schema.schemaCycles+"/"+schema.schemaIntervalCycles+"/"+schema.schemaTotalDays)
      .map(res => res.json());
  }

  updateSchema(schema){
 // console.log('update schemasssss')
 // console.log(schema)

    return this.http.put("http://localhost:9003/updateschema/"+schema.schemaId+"/"+schema.schemaName+"/"+schema.schemaCycles+"/"+schema.schemaIntervalCycles+"/"+schema.schemaTotalDays, JSON.stringify(schema))
      .map(res => res.json());
  }

  deleteSchema(id){
    return this.http.delete("http://localhost:9003/deleteschema/"+id)
      .map(res => res.json());
  }

   getSchemasByDiagnosisId(diagnose:any): Observable<Schema[]> {
   console.log(diagnose)
    return this.http.get('http://localhost:9003/getSchemasByDiagnosisId/'+diagnose.diagnosisId)
      .map(res => <Schema[]>res.json());
  }

}
