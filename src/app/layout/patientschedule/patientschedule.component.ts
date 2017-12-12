
import { el } from '@angular/platform-browser/testing/src/browser_util';
import { selector } from 'rxjs/operator/multicast';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PersonalizedSchema } from './shared/personalizedschema';


@Component({
  selector: 'app-patientschedule',
  templateUrl: './patientschedule.component.html',
  styleUrls: ['./patientschedule.component.scss']
})
export class PatientScheduleComponent implements OnInit {
    public myForm: FormGroup;

    personalizedSchemaValues: PersonalizedSchema[]=[
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"FLUORACILO",cycle:1,applicationDay:1,applicationDate:"08/12/2017",theoricalDose:"50.0", solutionId:1, finalVolume:"78",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"CISPLATINO",cycle:1,applicationDay:1,applicationDate:"08/12/2017",theoricalDose:"5.5", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"ONDANSETRON",cycle:1,applicationDay:1,applicationDate:"08/12/2017",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1}
    ,{personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"ONDANSETRON",cycle:1,applicationDay:1,applicationDate:"08/12/2017",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1}];


    

    constructor(private formBuilder: FormBuilder,private route: ActivatedRoute) {

    }



  ngOnInit() {

  }
SearchUser(){}

    onRowSelect(event) {
       console.log(event.data );

    }

    onRowUnselect(event){
     console.log(event.data );
    }
}
