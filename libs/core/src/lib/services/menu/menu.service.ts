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
          href: './files'
        },
        {
          title: 'Инспектор карт',
          icon: 'map',
          href: './maps'
        },
        {
          title: 'Банлист',
          icon: 'person_off',
          href: './bans'
        },
        {
          title: 'Админы',
          icon: 'admin_panel_settings',
          href: './admins'
        },
        {
          title: 'Бэкапы',
          icon: 'shelves',
          href: './backups'
        },
        {
          title: 'Мониторинг',
          icon: 'analytics',
          href: './monitoring'
        }
    ]

    buildMenu(permitions: any) {
        /** not implemented */
        return this.list;
    }
}
