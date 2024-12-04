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
      }
    ]
  }
];
