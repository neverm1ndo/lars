import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFacade } from './application/login.facade';

@NgModule({
  imports: [CommonModule],
  providers: [LoginFacade]
})
export class LoginDomainModule {}
