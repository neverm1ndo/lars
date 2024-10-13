import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFacade } from './application/login.facade';
import { LoginService } from './infrastructure/login.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    LoginService,
    LoginFacade
  ]
})
export class LoginDomainModule {}
