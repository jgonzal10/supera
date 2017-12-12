import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchemasComponent } from './schemas.component';
import { SchemaFormComponent } from './schema-form/schema-form.component';

const routes: Routes = [
    { path: '', component: SchemasComponent },
    { path: 'schema/new', component: SchemaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemasRoutingModule { }