import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { LarsMenuService } from '@lars/core'

const MATERIAL_MODULES = [
  MatIconModule,
  MatRippleModule,
  MatButtonModule,
  MatTooltipModule
];

@Component({
  selector: 'lars-sidepanel',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ...MATERIAL_MODULES
  ],
  templateUrl: './sidepanel.component.html',
  styleUrl: './sidepanel.component.scss',
})
export class SidepanelComponent {
  private readonly menuService = inject(LarsMenuService);
  
  list = this.menuService.buildMenu([]);
}
