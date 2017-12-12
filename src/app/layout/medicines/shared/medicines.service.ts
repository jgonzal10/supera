import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MedicinesService {

  private url: string = "http://localhost:9003/medicines";

  constructor(private http: Http) { }

  getMedicines(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getMedicine(id){
    return this.http.get("http://localhost:9003/medicine/"+id)
      .map(res => res.json());
  }
  
  addMedicine(medicine){
//  console.log('addd medicine')
  //console.log(medicine)
    return this.http.get("http://localhost:9003/medicinenew/"+medicine.genericName+"/"+medicine.comercialName+"/"+medicine.concentration+"/"+medicine.unities+"/"+medicine.volume+"/"+medicine.ref_cal+"/"+medicine.maxApplicationDose+"/"+medicine.maxAcumDose)
      .map(res => res.json());
  }

  updateMedicine(medicine){
 // console.log('update medicine')
 // console.log(medicine)

    return this.http.put("http://localhost:9003/updatemedicine/"+medicine.medicineId+"/"+medicine.genericName+"/"+medicine.comercialName+"/"+medicine.concentration+"/"+medicine.unities+"/"+medicine.volume+"/"+medicine.ref_cal+"/"+medicine.maxApplicationDose+"/"+medicine.maxAcumDose, JSON.stringify(medicine))
      .map(res => res.json());
  }

  deleteMedicine(id){
    return this.http.delete("http://localhost:9003/deletemedicine/"+id)
      .map(res => res.json());
  }

}
