import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { from, Observable } from 'rxjs';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { ElectronService } from '@lars/core';

@Component({
  selector: 'lars-settings-pages',
  templateUrl: './settings-pages.component.html',
  styleUrl: './settings-pages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsPagesComponent {
  private readonly electron = inject(ElectronService);

  $version = this.electron.getPlatformVersion();
}
