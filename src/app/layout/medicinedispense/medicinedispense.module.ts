import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicineDispenseRoutingModule } from './medicinedispense-routing.module';
import { MedicineDispenseComponent } from './medicinedispense.component';
import { PageHeaderModule } from './../../shared';
import { MedicineDispenseService } from './shared/medicinedispense.service';

import {DropdownModule} from 'primeng/primeng';
import {OrderListModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {MultiSelectModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
@NgModule({
    imports: [
        CommonModule,
        MedicineDispenseRoutingModule,
        PageHeaderModule,
        PanelModule,
        ReactiveFormsModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    CalendarModule,
    MultiSelectModule,
    FormsModule,
        OrderListModule
    ],
    declarations: [MedicineDispenseComponent],
    providers: [
    MedicineDispenseService
  ]
})
export class MedicineDispenseModule { }