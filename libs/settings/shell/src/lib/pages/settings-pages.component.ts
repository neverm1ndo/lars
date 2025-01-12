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
      title: 'settings.Sidepanel.Account.AccountTitle',
      icon: 'person',
      items: [
        { 
          title: 'settings.Sidepanel.Account.Profile',
          link: './profile'
        }
      ]
    },
    {
      title: 'settings.Sidepanel.Logs.LogsMonitoringTitle',
      icon: 'receipt_long',
      items: [
        { 
          title: 'settings.Sidepanel.Logs.Appearance',
          link: './logs/appearance'
        },
        { 
          title: 'settings.Sidepanel.Logs.Filter',
          link: './logs/filter'
        }
      ]
    },
    {
      title: 'settings.Sidepanel.App.AppSettingsTitle',
      icon: 'settings_applications',
      items: [
        { 
          title: 'settings.Sidepanel.App.Appearance',
          link: './app/appearance'
        }
      ]
    }
  ]);
}
