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
        loadChildren: () => import('@lars/dashboard/shell').then(m => m.DashboardShellModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
