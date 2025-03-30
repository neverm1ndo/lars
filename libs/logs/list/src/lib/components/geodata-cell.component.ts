import { Component, ViewEncapsulation } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { LogsGeoData } from '@lars/logs/domain';

import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

const MATERIAL_MODULES = [
  MatIcon,
  MatIconButton
];

@Component({
  selector: 'lars-geodata-cell',
  standalone: true,
  imports: [...MATERIAL_MODULES],
  template: `
    @if (value) {
      <!-- <button mat-icon-button> -->
        <mat-icon>public</mat-icon>
      <!-- </button> -->
      <span class="mat-body-small">{{ value?.ip }}</span>
    }
  `,
  styles: `
    mat-icon {
      width: 14px;
      height: 14px; 
      font-size: 14px;
      margin-right: 0.4rem;
      position: relative;
      top: 2px;
    }
  `
})
export class GeodataCellComponent implements ICellRendererAngularComp  {
  value?: LogsGeoData | null;

  agInit(params: ICellRendererParams<any, LogsGeoData, any>): void {
    this.value = params.value;
  }

  refresh(params: ICellRendererParams<any, LogsGeoData, any>): boolean {
    this.value = params.value;

    return true;
  }
}
