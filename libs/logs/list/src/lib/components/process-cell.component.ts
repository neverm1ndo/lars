import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

import { Process } from '@lars/logs/domain';

@Component({
  selector: 'lars-process-cell',
  standalone: true,
  imports: [],
  template: '<span [title]="value">{{ value }}</span>',
  host: {
    class: 'lars-logs-process-cell'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessCellComponent implements ICellRendererAngularComp {
  value!: Process | string;

  agInit(params: ICellRendererParams<any, any, any>): void {
      this.value = params.value;
  }

  refresh(params: ICellRendererParams<any, any, any>): boolean {
      this.value = params.value;

      return true;
  }
}
