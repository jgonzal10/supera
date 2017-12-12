import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicineDispenseFormComponent } from './medicinedispenseform.component';

const routes: Routes = [
    { path: '', component: MedicineDispenseFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicineDispenseFormRoutingModule { }