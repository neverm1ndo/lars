import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'lars-feature-dashboard',
  templateUrl: './feature-dashboard.component.html',
  styleUrl: './feature-dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  options!: GridsterConfig;
  dashboard!: Array<GridsterItem>;

  itemChange(item: any, itemComponent: any) {
    console.info('itemChanged', item, itemComponent);
  }

  itemResize(item: any, itemComponent: any) {
    console.info('itemResized', item, itemComponent);
  }

  changedOptions() {
    if (this.options.api) {
      // this.options.api.optionsChanged();
    }
  }

  removeItem(item: any) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    // this.dashboard.push({});
  }

  ngOnInit(): void {
    this.options = {
      itemChangeCallback: this.itemChange,
      itemResizeCallback: this.itemResize,
      draggable: {
        enabled: true
      },
      maxCols: 4
    };

    this.dashboard = [
      // {cols: 2, rows: 1, y: 0, x: 0 },
      // {cols: 2, rows: 2, y: 0, x: 2 }
    ];
  }
}
