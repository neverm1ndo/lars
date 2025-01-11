import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { provideTranslocoScope, TranslocoModule } from '@jsverse/transloco';

import { LogsDomainModule, LogsFacade } from '@lars/logs/domain';

import { LOGS_CHUNK_CONTROL_OPTIONS, LOGS_CHUNK_SIZE } from '../config/default-logs-settings';
import { switchMap } from 'rxjs';


const MATERIAL_MODULES = [
  MatSelectModule,
  MatFormFieldModule
];

@Component({
  selector: 'lars-logs-settings',
  standalone: true,
  imports: [
    CommonModule,
    LogsDomainModule,
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
export class LogsSettingsComponent implements OnInit {
  private readonly desroyRef = inject(DestroyRef);
  private readonly formBuilder = inject(FormBuilder);
  private readonly logsFacade = inject(LogsFacade);

  logsAppearanceSettingsForm = this.formBuilder.group({
    chunkSize: this.formBuilder.control(LOGS_CHUNK_SIZE, { nonNullable: true })
  });

  chunkSizes = LOGS_CHUNK_CONTROL_OPTIONS;

  changeLogsAppearanceSettings() {
    console.log(this.logsAppearanceSettingsForm.value);
    this.logsFacade.setLogsAppearamceSettings(this.logsAppearanceSettingsForm.value);
  }

  ngOnInit(): void {
    this.logsFacade.getLogsAppearamceSettings()
      .pipe(
        takeUntilDestroyed(this.desroyRef)
      )
      .subscribe({
        next: (settings) => this.logsAppearanceSettingsForm.patchValue(settings, { emitEvent: false })
      });
    
    this.logsAppearanceSettingsForm.valueChanges
      .pipe(
        takeUntilDestroyed(this.desroyRef)
      )
      .subscribe({
        next: (settings) => this.logsFacade.setLogsAppearamceSettings(settings) 
      });
  }
}
