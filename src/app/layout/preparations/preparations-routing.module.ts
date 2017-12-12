import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreparationsComponent } from './preparations.component';

const routes: Routes = [
    { path: '', component: PreparationsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreparationRoutingModule { }