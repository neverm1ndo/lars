import { Route } from '@angular/router';
import { SettingsPagesComponent } from './pages/settings-pages.component';


export const settingsShellRoutes: Route[] = [
  { 
    path: '',
    component: SettingsPagesComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'profile' },
      {
        path: 'profile',
        pathMatch: 'full',
        loadComponent: () => import('@lars/profile/profile-settings').then(
          (c) => c.ProfileSettingsComponent
        )
      },
      {
        path: 'logs',
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'appearance' },
          {
            path: 'appearance',
            pathMatch: 'full',
            loadComponent: () => import('@lars/logs/logs-settings').then(
              (c) => c.LogsSettingsComponent
            )
          },
          {
            path: 'filter',
            pathMatch: 'full',
            loadComponent: () => import('@lars/logs/logs-settings').then(
              (c) => c.LogsSettingsComponent
            )
          }
        ]
      },
      // {
      //   path: 'app',
      //   children: [
      //     { path: '', pathMatch: 'full', redirectTo: 'appearance' },
      //     {
      //       path: 'appearance',
      //       pathMatch: 'full',
      //       loadComponent: () => import('@lars/logs/logs-settings').then(
      //         (c) => c.LogsSettingsComponent
      //       )
      //     },
      //   ]
      // }
    ]
  }
];
