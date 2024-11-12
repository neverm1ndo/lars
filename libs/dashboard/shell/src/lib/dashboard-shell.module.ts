import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dashboardShellRoutes } from './lib.routes';

import { DashboardModule } from '@lars/dashboard/feature-dashboard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardShellRoutes),
    DashboardModule
  ],
})
export class DashboardShellModule {}
