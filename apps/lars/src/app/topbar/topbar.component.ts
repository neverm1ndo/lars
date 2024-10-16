import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ElectronService, ThemeManagerService } from '@lars/core';

@Component({
    selector: 'lars-topbar',
    templateUrl: './topbar.component.html',
    styleUrl: './topbar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopbarComponent {
    private readonly electron = inject(ElectronService);
    private readonly theme = inject(ThemeManagerService);
    
    close(): void {
        void this.electron.ipcRenderer?.send('close');
    }
    minimize(): void {
        void this.electron.ipcRenderer?.send('minimize');
    }

    change(theme: 'dark' | 'light') {
        this.theme.changeTheme(theme);
    }
}
