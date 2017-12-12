import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }  from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }  from '@angular/http';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PageHeaderModule } from './../../shared';
import { PatientsService } from './shared/patients.service';
import {DataTableModule,SharedModule} from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        PatientsRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        DataTableModule,
        SharedModule
    ],
    declarations: [PatientsComponent,PatientFormComponent],
    providers: [
    PatientsService
  ]
})
export class PatientsModule { }
