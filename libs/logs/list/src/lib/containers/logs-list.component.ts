import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsFilterComponent } from '@lars/logs/filter';

@Component({
  selector: 'lars-logs-list',
  standalone: true,
  imports: [
    CommonModule,
    LogsFilterComponent
  ],
  templateUrl: './logs-list.component.html',
  styleUrl: './logs-list.component.scss',
})
export class LogsListComponent {}
