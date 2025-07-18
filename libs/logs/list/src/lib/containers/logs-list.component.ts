import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

import type { ColDef } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';

import { LogsDomainModule, LogsFacade } from '@lars/logs/domain';
import { LogsGridService } from './logs-grid.service';
import { logsColDefs } from '../components/column-definitions';
import { gridOptions } from '../components/grid-options';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

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
  providers: [LogsGridService],
  templateUrl: './logs-list.component.html',
  styleUrl: './logs-list.component.scss',
})
export class LogsListComponent implements OnInit {
  private readonly logsFacade = inject(LogsFacade);
  private readonly gridService = inject(LogsGridService);
  private readonly destroyRef = inject(DestroyRef);

  list$ = this.logsFacade.getLogsList().pipe(
    map((lines) => lines.map((line) => this.gridService.flatColumns(line)))
  );

  isLoading$ = this.logsFacade.getIsLoadingState();

  gridOptions = gridOptions;

  colDefs: ColDef[] = [
    ...logsColDefs
  ];

  refresh() {
    this.logsFacade.fetchLogsList();
  }

  ngOnInit(): void {
    this.logsFacade.fetchLogsList();
  }
}
