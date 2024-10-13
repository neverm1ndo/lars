import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
import { ExternalLinksService, StorageService } from '@lars/core';
import { LoginFacade, UserLoginCredentials } from '@lars/login/domain';

const MIN_PASSWORD_LENGTH = 4;

@Component({
  selector: 'lars-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  private readonly externalLinks = inject(ExternalLinksService);
  private readonly storage = inject(StorageService);
  private readonly loginFacade = inject(LoginFacade);
  private readonly transloco = inject(TranslocoService);
  private readonly router = inject(Router);

  private readonly snackbar = inject(MatSnackBar);
  
  form: FormGroup = new FormGroup({
    email: new FormControl(this.storage.get('lars/user/last'), [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(MIN_PASSWORD_LENGTH)
    ])
  });

  showPassword = signal(false);
  isLoading = signal(false);

  togglePasswordShow() {
    this.showPassword.update((value) => !value);
  }

  recoverPassword(): void {
    this.externalLinks.openExternal('https://www.gta-liberty.ru/ucp.php', { mode: 'sendpassword' })
  }

  login() {
    if (this.form.invalid) return;
    
    this.isLoading.set(true);

    const credentials= this.form.value as UserLoginCredentials;

    this.storage.set('lars/user/last', credentials.email);

    this.loginFacade.login(credentials)
      .subscribe({
        next: () => {
          this.isLoading.set(false);
        },
        error: ({ status }) => {
          this.isLoading.set(false);
          this.snackbar.open(
            this.transloco.translate('login.Login.Form.Error.Message', { status }),
            'OK'
          );
        }
      });
  }
}
