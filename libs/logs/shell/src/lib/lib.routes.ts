import { Route } from '@angular/router';

export const logsShellRoutes: Route[] = [
  { 
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('@lars/logs/list').then(
      (c) => c.LogsListComponent
    )
  }
];
