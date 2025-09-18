import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LoginDomainModule } from '@lars/login/domain';
import { provideTranslocoScope, TranslocoModule } from '@jsverse/transloco';
import { ProfileDomainModule } from '@lars/profile/domain';

import { LoginViewComponent } from './components/login-view/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginRoutingModule } from './login-routing.module';

const MATERIAL_MODULES = [
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [LoginViewComponent, LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    LoginDomainModule,
    ProfileDomainModule,
    TranslocoModule,
    ...MATERIAL_MODULES
  ],
  providers: [
    provideTranslocoScope({ scope: 'login' }),
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline',
        floatLabel: 'always'
      }
    }
  ]
})
export class LoginModule {}
