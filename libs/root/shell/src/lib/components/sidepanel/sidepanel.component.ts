import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list'
import { RouterLink } from '@angular/router';

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatListModule
];

@Component({
  selector: 'lars-sidepanel',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ...MATERIAL_MODULES
  ],
  templateUrl: './sidepanel.component.html',
  styleUrl: './sidepanel.component.scss',
})
export class SidepanelComponent {
  list = [
    {
      title: 'Логи',
      href: '',
      isActive: false,
    }
  ]
}
