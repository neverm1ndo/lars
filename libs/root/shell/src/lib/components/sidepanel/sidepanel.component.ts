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
      href: './dashboard',
      isActive: false,
    },
    {
      title: 'Логи',
      icon: 'search',
      href: './logs',
      isActive: false,
    },
    {
      title: 'Файлы',
      icon: 'code',
      href: './logs',
      isActive: false,
    },
    {
      title: 'Инспектор карт',
      icon: 'map',
      href: './logs',
      isActive: false,
    },
    {
      title: 'Банлист',
      icon: 'person_off',
      href: './logs',
      isActive: false,
    },
    {
      title: 'Админы',
      icon: 'shield_person',
      href: './logs',
      isActive: false,
    },
    {
      title: 'Бэкапы',
      icon: 'shelves',
      href: './logs',
      isActive: false,
    },
    {
      title: 'Мониторинг',
      icon: 'monitoring',
      href: './logs',
      isActive: false,
    }
  ]
}
