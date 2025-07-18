import { Component, Input } from '@angular/core';

@Component({
  selector: 'lars-string-cell',
  standalone: true,
  imports: [],
  template: `<span>{{ value }}</span>`,
})
export class StringCellComponent {
  @Input() value?: string;
}
