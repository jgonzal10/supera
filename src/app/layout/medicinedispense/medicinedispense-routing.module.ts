import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicineDispenseComponent } from './medicinedispense.component';

const routes: Routes = [
    { path: '', component: MedicineDispenseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicineDispenseRoutingModule { }