import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

import type { ColDef } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';

import { LogsDomainModule } from '@lars/logs/domain';

ModuleRegistry.registerModules([AllCommunityModule]);

const CDK_MODULES = [
  ScrollingModule
];

const MATERIAL_MODULES = [
  MatIconModule,
  MatProgressSpinner
];

@Component({
  selector: 'lars-logs-list',
  standalone: true,
  imports: [
    CommonModule,
    LogsDomainModule,
    AgGridAngular,
    ...CDK_MODULES,
    ...MATERIAL_MODULES
],
  templateUrl: './logs-list.component.html',
  styleUrl: './logs-list.component.scss',
})
export class LogsListComponent {
  list$ = [];
}
