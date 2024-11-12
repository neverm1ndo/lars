import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileDomainModule } from '@lars/profile/domain';

import { LoginFacade } from './application/login.facade';
import { LoginService } from './infrastructure/login.service';

@NgModule({
  imports: [
    CommonModule,
    ProfileDomainModule
  ],
  providers: [
    LoginService,
    LoginFacade
  ]
})
export class LoginDomainModule {}
