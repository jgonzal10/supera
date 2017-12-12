import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicineDispenseFormRoutingModule } from './medicinedispenseform-routing.module';
import { MedicineDispenseFormComponent } from './medicinedispenseform.component';
import { PageHeaderModule } from './../../shared';

import {DropdownModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {MultiSelectModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
@NgModule({
    imports: [
        CommonModule,
        MedicineDispenseFormRoutingModule,
        PageHeaderModule,
        PanelModule,
        ReactiveFormsModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    CalendarModule,
    MultiSelectModule,
    FormsModule
    ],
    declarations: [MedicineDispenseFormComponent],
    providers: [
  ]
})
export class MedicineDispenseFormModule { }