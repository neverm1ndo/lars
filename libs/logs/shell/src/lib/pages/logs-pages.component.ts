import { Component } from '@angular/core';
import { LogsFilterComponent } from '@lars/logs/filter';
import { LogsListComponent } from '@lars/logs/list';

@Component({
  selector: 'lars-logs-pages',
  standalone: true,
  imports: [
    LogsFilterComponent,
    LogsListComponent
  ],
  templateUrl: './logs-pages.component.html',
  styleUrl: './logs-pages.component.scss',
})
export class LogsPagesComponent {}
