import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispenseRoutingModule } from './dispense-routing.module';
import { DispenseComponent } from './dispense.component';
import { PageHeaderModule } from './../../shared';
import { DispenseService } from './shared/dispense.service';

import {DropdownModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {MultiSelectModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        DispenseRoutingModule,
        PageHeaderModule,
        PanelModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    CalendarModule,
    MultiSelectModule,
    FormsModule
    ],
    declarations: [DispenseComponent],
    providers: [
    DispenseService
  ]
})
export class DispenseModule { }