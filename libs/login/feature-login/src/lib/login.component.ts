import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDomainModule, LoginFacade } from '@lars/login/domain';

@Component({
  standalone: true,
  imports: [CommonModule, LoginDomainModule],
  selector: 'lars-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private loginFacade = inject(LoginFacade);
}
