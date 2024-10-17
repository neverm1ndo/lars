import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootShellComponent } from '@lars/root/shell';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'login',
    loadChildren: () => import('@lars/login/feature-login').then(m => m.LoginModule),
  },
  {
    path: '',
    component: RootShellComponent,
    canActivateChild: [],
    // children: [
    //   { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
