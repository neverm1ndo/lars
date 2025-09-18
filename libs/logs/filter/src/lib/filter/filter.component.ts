import { Component, inject, model } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe } from '@angular/common';

import { LogsDomainModule, LogsFacade } from '@lars/logs/domain';

const MATERIAL_MODULES = [MatIcon, MatIconButton, MatInputModule, MatFormFieldModule];

@Component({
  selector: 'lars-logs-filter',
  standalone: true,
  imports: [FormsModule, LogsDomainModule, AsyncPipe, ...MATERIAL_MODULES],
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
  styleUrl: './filter.component.scss'
})
export class LogsFilterComponent {
  private readonly logsFacade = inject(LogsFacade);

  isListLoading$ = this.logsFacade.getIsLoadingState();

  query = model<string>('');

  search() {
    this.logsFacade.search(this.query());
  }

  refresh() {
    if (this.query()) {
      return void this.search();
    }

    this.logsFacade.fetchLogsList();
  }
}
