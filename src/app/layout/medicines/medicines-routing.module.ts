import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicinesComponent } from './medicines.component';
import { MedicineFormComponent } from './medicine-form/medicine-form.component';

const routes: Routes = [
    { path: '', component: MedicinesComponent },
    { path: 'medicine/new', component: MedicineFormComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicinesRoutingModule { }