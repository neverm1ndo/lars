import { Component, inject, ViewContainerRef } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { ICellRendererAngularComp } from 'ag-grid-angular';

import { LogsContentData } from '@lars/logs/domain';

@Component({
  selector: 'lars-content-cell',
  standalone: true,
  imports: [],
  template: '',
  styleUrl: './content-cell.component.scss',
})
export class ContentCellComponent implements ICellRendererAngularComp {
    private readonly viewContainerRef = inject(ViewContainerRef);

    value?: LogsContentData | null;
  
    agInit(params: ICellRendererParams<any, LogsContentData, any>): void {
        this.value = params.value;

        if (this.value) {}

        // const component = this.viewContainerRef.createComponent();
    }
  
    refresh(params: ICellRendererParams<any, LogsContentData, any>): boolean {
        this.value = params.value;
  
        return true;
    }
}
