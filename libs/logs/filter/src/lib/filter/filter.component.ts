import { Component } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';

const MATERIAL_MODULES = [
  MatIcon,
  MatIconButton,
  MatInputModule,
  MatFormFieldModule
];

@Component({
  selector: 'lars-logs-filter',
  standalone: true,
  imports: [
    ...MATERIAL_MODULES
  ],
  providers: [
    { 
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { 
        appearance: 'outline',
        subscriptSizing: 'dynamic'
      }
    }
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class LogsFilterComponent {}
