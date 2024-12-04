import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { settingsShellRoutes } from './lib.routes';
import { SettingsPagesComponent } from './pages/settings-pages.component';
import { MatIconModule } from '@angular/material/icon';

const MATERIAL_MODULES = [
  MatListModule,
  MatDividerModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(settingsShellRoutes),
    ...MATERIAL_MODULES
  ],
  declarations: [SettingsPagesComponent],
})
export class SettingsShellModule {}
