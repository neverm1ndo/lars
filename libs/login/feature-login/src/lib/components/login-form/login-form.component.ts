import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lars-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {}
