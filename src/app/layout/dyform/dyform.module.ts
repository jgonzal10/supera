import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {DataListModule} from 'primeng/primeng';
import {OrderListModule} from 'primeng/primeng';
import { FormsModule,  }          from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpModule }             from '@angular/http';


import { DyFormRoutingModule } from './dyform-routing.module';
import { DyFormComponent } from './dyform.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        DyFormRoutingModule,
        PageHeaderModule,
        
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    OrderListModule,
    DataListModule
    ],
    declarations: [DyFormComponent]
})
export class DyFormModule { }
