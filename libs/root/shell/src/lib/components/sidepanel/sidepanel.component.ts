import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

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
  list = [
    {
      title: 'Дашборды',
      icon: 'dashboard',
      href: './dashboard'
    },
    {
      title: 'Логи',
      icon: 'search',
      href: './logs'
    },
    {
      title: 'Файлы',
      icon: 'code',
      href: './logs'
    },
    {
      title: 'Инспектор карт',
      icon: 'map',
      href: './logs'
    },
    {
      title: 'Банлист',
      icon: 'person_off',
      href: './logs'
    },
    {
      title: 'Админы',
      icon: 'admin_panel_settings',
      href: './logs'
    },
    {
      title: 'Бэкапы',
      icon: 'shelves',
      href: './logs'
    },
    {
      title: 'Мониторинг',
      icon: 'analytics',
      href: './logs'
    }
  ]
}
