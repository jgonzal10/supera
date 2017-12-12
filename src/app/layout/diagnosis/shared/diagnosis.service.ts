import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DiagnosisService {

  private url: string = "http://localhost:9003/diagnosis";

  constructor(private http: Http) { }

  getDiagnosis(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getDiagnose(id){
//    console.log('getDiagnose')
  //  console.log(id)
    return this.http.get("http://localhost:9003/diagnosis/"+id)
      .map(res => res.json());

  }

  addDiagnose(diagnose){
    return this.http.get("http://localhost:9003/diagnosisnew/"+diagnose.diagnosisName )
      .map(res => res.json());
  }

  updateDiagnose(diagnose){

  return this.http.put("http://localhost:9003/updatediagnosis/"+diagnose.diagnosisId+"/"+diagnose.diagnosisName, JSON.stringify(diagnose))
      .map(res => res.json());


  }

  deleteDiagnose(id){
  //console.log('delete diagnose')
 // console.log(id)
 return this.http.delete("http://localhost:9003/deletediagnosis/"+id)
       .map(res => res.json());
  /*  return this.http.delete(this.getDiagnoseUrl(id))
      .map(res => res.json());*/
  }

  private getDiagnoseUrl(id){
    return this.url + "/" + id;
  }

}
