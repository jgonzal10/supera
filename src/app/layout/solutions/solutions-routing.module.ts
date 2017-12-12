import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutionsComponent } from './solutions.component';
import { SolutionFormComponent } from './solution-form/solution-form.component';

const routes: Routes = [
    { path: '', component: SolutionsComponent },
    { path: 'solutions/new', component: SolutionFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionsRoutingModule { }