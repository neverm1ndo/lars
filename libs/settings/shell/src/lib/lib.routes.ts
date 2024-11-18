import { Route } from '@angular/router';
import { SettingsPagesComponent } from './pages/settings-pages.component';

export const settingsShellRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: SettingsPagesComponent }
];
