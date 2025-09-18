import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormField, MatHint, MatInput, MatSuffix } from '@angular/material/input';

import { filter, map } from 'rxjs';

import { provideTranslocoScope, TranslocoModule } from '@jsverse/transloco';
import { ProfileDomainModule, ProfileFacade, Workgroup } from '@lars/profile/domain';

import { ElectronService, ExternalLinksService } from '@lars/core';

import { ProfileSettingsTokenDialogComponent } from '../profile-settings-token-dialog/profile-settings-token-dialog.component';

const MATERIAL_MODULES = [
  MatCardModule,
  MatIconModule,
  MatButton,
  MatIconButton,
  MatDivider,
  MatChip,
  MatChipSet,
  MatDialogModule,
  MatInput,
  MatFormField,
  MatHint,
  MatSuffix,
  MatSnackBarModule
];

const UCP_URL = 'https://www.gta-liberty.ru/ucp.php';
const UCP_PROFILE_PARAMS = {
  i: 'ucp_profile'
};
const CLIPBOARD_SNACKBAR_DURATION = 2000;

@Component({
  selector: 'lars-profile-settings',
  standalone: true,
  imports: [CommonModule, ProfileDomainModule, TranslocoModule, ...MATERIAL_MODULES],
  providers: [provideTranslocoScope({ scope: 'profile' })],
  templateUrl: './profile-settings.component.html',
  styleUrl: './profile-settings.component.scss'
})
export class ProfileSettingsComponent {
  private readonly profileFacade = inject(ProfileFacade);
  private readonly dialog = inject(MatDialog);
  private readonly snackbar = inject(MatSnackBar);
  private readonly electron = inject(ElectronService);
  private readonly external = inject(ExternalLinksService);

  userProfile$ = this.profileFacade.getUserProfile().pipe(
    map((profile) => ({
      ...profile,
      roles: new Set(profile.permissions)
    }))
  );

  isShowToken = signal(false);

  profileSettings() {
    this.external.openExternal(UCP_URL, {
      ...UCP_PROFILE_PARAMS,
      mode: 'profile_info'
    });
  }

  changePassword() {
    this.external.openExternal(UCP_URL, {
      ...UCP_PROFILE_PARAMS,
      mode: 'reg_details'
    });
  }

  showToken() {
    this.dialog
      .open(ProfileSettingsTokenDialogComponent)
      .afterClosed()
      .pipe(filter((confirmed) => confirmed))
      .subscribe(() => {
        this.isShowToken.set(true);
      });
  }

  copy(token?: string) {
    if (!token) return;

    this.electron.ipcRenderer.invoke('clipboard', token).then(() => {
      this.snackbar.open('Токен авторизации скопирован в буфер обмена', 'OK', {
        duration: CLIPBOARD_SNACKBAR_DURATION
      });
    });
  }
}
