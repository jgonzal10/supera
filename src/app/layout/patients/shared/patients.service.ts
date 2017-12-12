import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PatientsService {

  private url: string = "http://localhost:9003/patients";

  constructor(private http: Http) { }

  getPatients(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getPatient(id){
    return this.http.get("http://localhost:9003/patient/"+id)
      .map(res => res.json());
  }

  addPatient(patient){
 // console.log('addd p')
  //console.log(patient)

    return this.http.get("http://localhost:9003/patientnew/"+patient.patientIdNumber+"/"+patient.patientName+"/"+patient.patientLastName+"/"+patient.patientGender+"/"+patient.patientAge+"/"+patient.patientWeight+"/"+patient.patientHeight)
      .map(res => res.json());
  }

  updatePatient(patient){
 // console.log('update patient')
 // console.log(patient)

    return this.http.put("http://localhost:9003/updatepatient/"+patient.patientId+"/"+patient.patientIdNumber+"/"+patient.patientName+"/"+patient.patientLastName+"/"+patient.patientGender+"/"+patient.patientAge+"/"+patient.patientWeight+"/"+patient.patientHeight, JSON.stringify(patient))
      .map(res => res.json());
  }

  deletePatient(id){
    return this.http.delete("http://localhost:9003/deletepatient/"+id)
      .map(res => res.json());
  }
 
  diagnosePatient(diagnose){
    console.log(diagnose)
    let data = diagnose.initialDay
    let res = data.split("-");
    diagnose.initialDay = "";
    diagnose.initialDay = res[2]+"-"+res[1]+"-"+res[0];
    console.log(diagnose)

    return this.http.get("http://localhost:9003/diagnosepatient/"+diagnose.patientId+"/"+diagnose.schemaId+"/"+diagnose.initialDay).map(res => res.json());
  }
}
