import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardModule } from '@lars/dashboard/feature-dashboard';

import { dashboardShellRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(dashboardShellRoutes), DashboardModule]
})
export class DashboardShellModule {}
