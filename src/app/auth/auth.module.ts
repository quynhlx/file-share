import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([{
            path: '', redirectTo: 'login', pathMatch: 'full'
        }, {
            path: 'login', component: LoginComponent
        }, {
            path: 'register', component: RegisterComponent
        }])],
    exports: [],
    declarations: [LoginComponent, RegisterComponent],
    providers: [],
})
export class AuthModule { }
