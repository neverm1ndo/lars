import { Component, inject, ViewContainerRef } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { ICellRendererAngularComp } from 'ag-grid-angular';

import { LogsContentData } from '@lars/logs/domain';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'lars-content-cell',
  standalone: true,
  imports: [JsonPipe],
  template: '{{ value?.message }}',
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
