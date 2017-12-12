import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiagnosePatientRoutingModule } from './diagnose-patient-routing.module';
import { DiagnosePatientComponent } from './diagnose-patient.component';
import { PageHeaderModule } from './../../shared';
import { PatientsService } from '../patients/shared/patients.service';
import { DiagnosisService } from '../diagnosis/shared/diagnosis.service';
import { SchemasService } from '../schemas/shared/schemas.service';
import {CalendarModule} from 'primeng/primeng';
@NgModule({
    imports: [
        CommonModule, ReactiveFormsModule,
        DiagnosePatientRoutingModule,
        PageHeaderModule,
        CalendarModule
    ],
    declarations: [DiagnosePatientComponent],
        providers: [
    PatientsService,DiagnosisService,SchemasService
  ]
})
export class DiagnosePatientModule { }
