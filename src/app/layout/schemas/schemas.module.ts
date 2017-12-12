import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }  from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }  from '@angular/http';
import { SchemasRoutingModule } from './schemas-routing.module';
import { SchemasComponent } from './schemas.component';
import { PageHeaderModule } from './../../shared';
import { SchemaFormComponent } from './schema-form/schema-form.component';
import { SchemasService } from './shared/schemas.service';
@NgModule({
    imports: [
        CommonModule,
        SchemasRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [SchemasComponent, SchemaFormComponent],
    providers: [
    SchemasService
  ]
})
export class SchemasModule { }
