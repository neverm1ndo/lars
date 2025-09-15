import { Component, inject, ViewContainerRef } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

import { ICellRendererParams } from 'ag-grid-community';
import { ICellRendererAngularComp } from 'ag-grid-angular';

// import { LogsContentData } from '@lars/logs/domain';
// import { JsonPipe } from '@angular/common';

const MATERIAL_MODULES = [MatChipsModule];

@Component({
  selector: 'lars-content-cell',
  standalone: true,
  imports: [...MATERIAL_MODULES],
  templateUrl: './content-cell.component.html',
  styleUrl: './content-cell.component.scss'
})
export class ContentCellComponent implements ICellRendererAngularComp {
  value?: any | null;

  agInit(params: ICellRendererParams<any, any, any>): void {
    this.value = params.value;
  }

  refresh(params: ICellRendererParams<any, any, any>): boolean {
    this.value = params.value;

    return true;
  }
}
