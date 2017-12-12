import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsComponent } from './patients.component';
import { PatientFormComponent } from './patient-form/patient-form.component';

const routes: Routes = [
    { path: '', component: PatientsComponent },
    { path: 'patients/new', component: PatientFormComponent },
    { path: 'patients/:id', component: PatientFormComponent },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }