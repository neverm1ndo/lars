import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';

import { 
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';

import { provideTranslocoScope } from '@jsverse/transloco';

type ProfileSettingsTokenConfirmationDialogData = { 
  title: string;
  message: string
};

const MATERIAL_MODULES = [
  MatButton,
  MatDialogContent,
  MatDialogTitle,
  MatDialogActions
];

@Component({
  selector: 'lars-profile-settings-token-dialog',
  standalone: true,
  imports: [...MATERIAL_MODULES],
  providers: [
    provideTranslocoScope('profile')
  ],
  templateUrl: './profile-settings-token-dialog.component.html'
})
export class ProfileSettingsTokenDialogComponent {
  readonly dialogData = inject<ProfileSettingsTokenConfirmationDialogData>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef);

  abort() {
    this.dialogRef.close(false);
  }

  confirm() {
    this.dialogRef.close(true);
  }
}
