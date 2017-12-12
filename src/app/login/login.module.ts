import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginService } from './service/login.service';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
    	FormsModule,
        CommonModule,
        LoginRoutingModule
    ],
    declarations: [LoginComponent],
    providers: [LoginService],
})
export class LoginModule {
}
