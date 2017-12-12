import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientScheduleRoutingModule } from './patientschedule-routing.module';
import { PatientScheduleComponent } from './patientschedule.component';
import { PageHeaderModule } from './../../shared';

import {DropdownModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {MultiSelectModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {OrderListModule} from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        PatientScheduleRoutingModule,
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
    declarations: [PatientScheduleComponent],
    providers: [
  ]
})
export class PatientScheduleModule { }