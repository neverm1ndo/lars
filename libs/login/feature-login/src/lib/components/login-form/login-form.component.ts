import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoService } from '@jsverse/transloco';

import { filter, take } from 'rxjs';

import { ExternalLinksService, StorageService } from '@lars/core';
import { LoginFacade, UserLoginCredentials } from '@lars/login/domain';
import { ProfileFacade, LOCALSTORAGE_USER_LAST_KEY } from '@lars/profile/domain';

const MIN_PASSWORD_LENGTH = 4;

@Component({
  selector: 'lars-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly externalLinks = inject(ExternalLinksService);
  private readonly storage = inject(StorageService);
  private readonly loginFacade = inject(LoginFacade);
  private readonly profileFacade = inject(ProfileFacade);
  private readonly transloco = inject(TranslocoService);
  private readonly destroyRef = inject(DestroyRef);

  private readonly snackbar = inject(MatSnackBar);
  
  form: FormGroup = new FormGroup({
    email: new FormControl(this.storage.get(LOCALSTORAGE_USER_LAST_KEY), [
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

  login(): void {
    if (this.form.invalid) return;
    
    this.isLoading.set(true);

    const credentials= this.form.value as UserLoginCredentials;

    this.storage.set(LOCALSTORAGE_USER_LAST_KEY, credentials.email);

    this.loginFacade.login(credentials).pipe(
      take(1)
    )
    .subscribe({
      next: (profile) => {
        this.profileFacade.setUserProfile(profile);
      },
      error: ({ status }) => {
        this.snackbar.open(this.transloco.translate('login.Login.Form.Error.Message', { status }), 'OK');
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }

  ngOnInit(): void {
      this.profileFacade.isAuthenticated().pipe(
        takeUntilDestroyed(this.destroyRef),
        filter((isAuthenticated) => isAuthenticated)
      ).subscribe({
        next: async () => void this.router.navigate(['/app'])
      });
  }
}
