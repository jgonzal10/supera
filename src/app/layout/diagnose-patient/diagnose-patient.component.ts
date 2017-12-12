import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {PatientsService} from "../patients/shared/patients.service";
import {Patient} from "../patients/shared/patient";
import {DiagnosisService} from "../diagnosis/shared/diagnosis.service";
import {Diagnose} from "../diagnosis/shared/diagnose";
import {SchemasService} from "../schemas/shared/schemas.service";
import {Schema} from "../schemas/shared/schema";
import {CalendarModule} from 'primeng/primeng';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-diagnose-patient',
  templateUrl: './diagnose-patient.component.html',
  styleUrls: ['./diagnose-patient.component.scss']
})
export class DiagnosePatientComponent implements OnInit {
 public myForm: FormGroup;
 selDiagnose: any= null;



  //private patients: Patient[] = [];
  //private diagnosis: Diagnose[] = [];
  //private schemas: Schema[] = [];

  public patients: Patient[] = [
  {patientId:1,patientName:"Ana",patientLastName:"Gomez",patientGender:"F",patientAge:30,patientWeight:"60",patientHeight:"1.60",patientCorporalSurfice:"",idNumber:"12345678"},{patientId:2,patientName:"Marcos",patientLastName:"Fernandes",patientGender:"M",patientAge:40,patientWeight:"90",patientHeight:"1.75",patientCorporalSurfice:"",idNumber:"434534533"}];


public diagnosis: Diagnose[] = [{diagnosisId:1,diagnosisName:"Diagnosis1"},{diagnosisId:2,diagnosisName:"Diagnosis2"}];

  public schemas: Schema[] = [{schemaId:1,schemaName:"Esquema1",schemaCycles:3,schemaIntervalCycles:4,schemaTotalDays:24},
  {schemaId:2,schemaName:"Esquema2",schemaCycles:4,schemaIntervalCycles:6,schemaTotalDays:12}];
 
  private result : any[] = [];

  constructor(private patientsService: PatientsService,private diagnosisService: DiagnosisService,private schemasService: SchemasService, private _fb: FormBuilder,private router: Router) { }

  ngOnInit() {
      console.log(this.patients)

  		this.myForm = this._fb.group({
            patientId: [''],
            diagnoseId: [''],
            schemaId: [''],
            initialDay: ['']

        });

//Patients Service and Diagnosis

        //I have to adapt a method to bring the schemas related with the Diagnose
  /*    this.patientsService.getPatients()
      .subscribe(data => this.patients = data);
      this.diagnosisService.getDiagnosis().subscribe(data => this.diagnosis = data);*/
      //this.schemasService.getSchemas().subscribe(data => this.schemas = data);

  }

      diagnose(inf:any) {

        let dados2 =inf;
        console.log(dados2);
         this.router.navigate(['/patientschedule']);

      /*  this.patientsService.diagnosePatient(dados2.patientId,dados2.schemaId,dados2.initialDay).subscribe(data => this.schemas = data);
        this.patientsService.diagnosePatient(dados2).subscribe(data => this.schemas = data);*/

    }

    onChangeDiagnose(diagnoseValue: any) {
    console.log('here we go')
    this.selDiagnose = diagnoseValue;
     console.log(diagnoseValue);
     //Real Server 
   /* let dados = {diagnosisId:diagnoseValue};
    this.schemasService.getSchemasByDiagnosisId(dados).subscribe(dresult => this.schemas = dresult);*/



     if(diagnoseValue==1){
       this.schemas = [{schemaId:1,schemaName:"Esquema1",schemaCycles:3,schemaIntervalCycles:4,schemaTotalDays:24},
  {schemaId:2,schemaName:"Esquema2",schemaCycles:4,schemaIntervalCycles:6,schemaTotalDays:12}];
     }else{
       this.schemas  = [{schemaId:3,schemaName:"Esquema3",schemaCycles:3,schemaIntervalCycles:4,schemaTotalDays:24},
  {schemaId:4,schemaName:"Esquema4",schemaCycles:4,schemaIntervalCycles:6,schemaTotalDays:12}];
     }




}

}
