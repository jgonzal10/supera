import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }  from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }  from '@angular/http';
import { SolutionsRoutingModule } from './solutions-routing.module';
import { SolutionsComponent } from './solutions.component';
import { PageHeaderModule } from './../../shared';
import { SolutionFormComponent } from './solution-form/solution-form.component';
import { SolutionsService } from './shared/solutions.service';

@NgModule({
    imports: [
        CommonModule,
        SolutionsRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [SolutionsComponent, SolutionFormComponent],
        providers: [
    SolutionsService
  ]
})
export class SolutionsModule { }
