import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable()
export class LarsMenuService {
    private readonly http = inject(HttpClient);

    readonly list = [
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

    buildMenu(permitions: any) {
        /** not implemented */
        return this.list;
    }
}
