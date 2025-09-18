import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { GridsterModule } from 'angular-gridster2';

import { DashboardComponent } from './containers/feature-dashboard.component';

const MATERIAL_MODULES = [MatTabsModule, MatButtonModule, MatIconModule];

@NgModule({
  imports: [CommonModule, GridsterModule, ...MATERIAL_MODULES],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {}
