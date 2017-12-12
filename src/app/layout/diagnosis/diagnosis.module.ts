import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { DiagnosisRoutingModule } from './diagnosis-routing.module';
import { DiagnosisComponent } from './diagnosis.component';
import { PageHeaderModule } from './../../shared';
import { DiagnoseFormComponent } from './diagnose-form/diagnose-form.component';
import { DiagnosisService } from './shared/diagnosis.service';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    	ReactiveFormsModule,
    	RouterModule,
    	HttpModule,
        DiagnosisRoutingModule,
        PageHeaderModule
    ],
    declarations: [DiagnosisComponent, DiagnoseFormComponent],
        providers: [
    DiagnosisService
  ]
})
export class DiagnosisModule { }
