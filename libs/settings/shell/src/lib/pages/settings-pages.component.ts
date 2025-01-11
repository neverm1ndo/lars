import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';

import { ElectronService } from '@lars/core';
import { of } from 'rxjs';

@Component({
  selector: 'lars-settings-pages',
  templateUrl: './settings-pages.component.html',
  styleUrl: './settings-pages.component.scss',
  host: {
    style: 'width: 100%'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SettingsPagesComponent {
  private readonly electron = inject(ElectronService);

  version$ = this.electron.getPlatformVersion();

  menu$ = of([
    {
      title: 'Аккаунт',
      icon: 'person',
      items: [
        { 
          title: 'Профиль',
          link: './profile'
        }
      ]
    },
    {
      title: 'Мониторинг логов',
      icon: 'receipt_long',
      items: [
        { 
          title: 'Отображение',
          link: './logs/appearance'
        },
        { 
          title: 'Фильтр строк',
          link: './logs/filter'
        }
      ]
    }
  ]);
}
