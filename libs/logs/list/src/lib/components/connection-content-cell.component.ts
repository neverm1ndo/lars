import { Component, Input } from '@angular/core';

import { LogsContentData } from '@lars/logs/domain';

@Component({
  selector: 'lars-connection-content-cell',
  standalone: true,
  imports: [],
  template: '',
  styles: '',
})
export class ConnectionContentCellComponent {
  @Input() content!: LogsContentData;
}
