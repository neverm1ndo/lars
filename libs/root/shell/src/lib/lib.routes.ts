import { Route } from '@angular/router';
import { LarsRootShellComponent } from './root-shell/root-shell.component';

export const rootShellRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: LarsRootShellComponent },
];
