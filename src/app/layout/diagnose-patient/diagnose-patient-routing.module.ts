import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiagnosePatientComponent } from './diagnose-patient.component';

const routes: Routes = [
    { path: '', component: DiagnosePatientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosePatientRoutingModule { }