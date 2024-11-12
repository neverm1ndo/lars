import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';

import { GridsterModule } from 'angular-gridster2';

import { DashboardComponent } from './containers/feature-dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const MATERIAL_MODULES = [
  MatTabsModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    GridsterModule,
    ...MATERIAL_MODULES
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
})
export class DashboardModule {}
