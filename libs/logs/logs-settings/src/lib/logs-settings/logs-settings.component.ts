import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { provideTranslocoScope, TranslocoModule } from '@jsverse/transloco';

import { LOGS_CHUNK_CONTROL_OPTIONS, LOGS_CHUNK_SIZE } from '../config/default-logs-settings';

const MATERIAL_MODULES = [
  MatSelectModule,
  MatFormFieldModule
];

@Component({
  selector: 'lars-logs-settings',
  standalone: true,
  imports: [
    CommonModule,
    TranslocoModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES
  ],
  providers: [
    provideTranslocoScope({ scope: 'logs' }),
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { 
        appearance: 'outline',
        subscriptSizing: 'dynamic'
      }
    }
  ],
  templateUrl: './logs-settings.component.html',
  styleUrl: './logs-settings.component.scss'
})
export class LogsSettingsComponent {
  private readonly formBuilder = inject(FormBuilder);

  logsSettingsForm = this.formBuilder.group({
    chunkSize: this.formBuilder.control(LOGS_CHUNK_SIZE, { nonNullable: true })
  });

  chunkSizes = LOGS_CHUNK_CONTROL_OPTIONS;
}
