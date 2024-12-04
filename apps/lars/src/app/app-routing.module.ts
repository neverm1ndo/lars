import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LarsRootShellComponent } from '@lars/root/shell';
import { isLoggedInGuard } from './guards';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    loadChildren: () => import('@lars/login/feature-login').then(m => m.LoginModule),
  },
  {
    path: 'app',
    component: LarsRootShellComponent,
    canActivate: [
      isLoggedInGuard
    ],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        pathMatch: 'full',
        loadChildren: () => import('@lars/dashboard/shell').then(m => m.DashboardShellModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('@lars/settings/shell').then(m => m.SettingsShellModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
