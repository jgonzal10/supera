import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DyFormComponent } from './dyform.component';

const routes: Routes = [
    { path: '', component: DyFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DyFormRoutingModule { }
