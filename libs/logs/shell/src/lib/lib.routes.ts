import { Route } from '@angular/router';

import { LogsPagesComponent } from './pages/logs-pages.component';

export const logsShellRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: LogsPagesComponent
  }
];
