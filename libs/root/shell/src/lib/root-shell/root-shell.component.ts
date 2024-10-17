import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';

import { SidepanelComponent } from '../components/sidepanel/sidepanel.component';

const MATERIAL_MODULES = [
  MatSidenavModule
]

@Component({
  selector: 'lars-root-shell',
  standalone: true,
  imports: [
    RouterOutlet,
    SidepanelComponent,
    ...MATERIAL_MODULES
  ],
  templateUrl: './root-shell.component.html',
  styleUrl: './root-shell.component.scss',
})
export class RootShellComponent {}
