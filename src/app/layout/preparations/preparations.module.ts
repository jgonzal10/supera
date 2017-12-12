import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreparationRoutingModule } from './preparations-routing.module';
import { PreparationsComponent } from './preparations.component';
import { PageHeaderModule } from './../../shared';
import { PreparationService } from './shared/preparation.service';
import {DataTableModule, SharedModule} from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        PreparationRoutingModule,
        PageHeaderModule,
        DataTableModule
    ],
    declarations: [PreparationsComponent],
    providers: [
    PreparationService
  ]
})
export class PreparationsModule { }
