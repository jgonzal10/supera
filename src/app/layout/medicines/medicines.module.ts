import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { MedicinesRoutingModule } from './medicines-routing.module';
import { MedicinesComponent } from './medicines.component';
import { PageHeaderModule } from './../../shared';
import { MedicineFormComponent } from './medicine-form/medicine-form.component';
import { MedicinesService } from './shared/medicines.service';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    	ReactiveFormsModule,
    	RouterModule,
    	HttpModule,
        MedicinesRoutingModule,
        PageHeaderModule
    ],
    declarations: [MedicinesComponent, MedicineFormComponent],
        providers: [
    MedicinesService
  ]
})
export class MedicinesModule { }
