import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';


const MATERIAL_MODULES = [
  MatIcon
];

@Component({
  selector: 'lars-ip-cell',
  standalone: true,
  imports: [...MATERIAL_MODULES],
  template: `
    @if (value) {
      <mat-icon>public</mat-icon>
      <span class="mat-body-small">{{ value }}</span>
    }`,
  styles: `
    mat-icon {
      width: auto;
      height: auto; 
      font-size: 14px;
      margin-right: 0.4rem;
      position: relative;
      top: 2px;
    }
  `,
})
export class IpCellComponent implements ICellRendererAngularComp {
    value?: string | null;
  
    agInit(params: ICellRendererParams<any, string, any>): void {
      this.value = params.value;
    }
  
    refresh(params: ICellRendererParams<any, string, any>): boolean {
      this.value = params.value;
  
      return true;
    }
}
