import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDomainModule } from '@lars/login/domain';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { LoginRoutingModule } from './login-routing.module';
import { LoginViewComponent } from './components/login-view/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const MAT_MODULES = [
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
];

@NgModule({
    declarations: [LoginViewComponent, LoginFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        LoginDomainModule,
        ...MAT_MODULES
    ]
})
export class LoginModule {}