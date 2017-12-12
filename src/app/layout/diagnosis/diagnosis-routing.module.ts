import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiagnosisComponent } from './diagnosis.component';
import { DiagnoseFormComponent } from './diagnose-form/diagnose-form.component';

const routes: Routes = [
    { path: '', component: DiagnosisComponent },
    { path: 'diagnosis/new', component: DiagnoseFormComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosisRoutingModule { }