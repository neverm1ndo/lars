import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService, ThemeManagerService } from '@lars/core';

interface TopbarButton {
    ariaLabel?: string;
    icon?: string;
    action: <T>(...args: T[]) => void;
};

interface ExtraTopbarButton extends TopbarButton {
    textContent?: string;
}

@Component({
    selector: 'lars-topbar',
    templateUrl: './topbar.component.html',
    styleUrl: './topbar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopbarComponent {
    private readonly electron = inject(ElectronService);
    private readonly theme = inject(ThemeManagerService);
    private readonly router = inject(Router);

    readonly windowControlButtons: TopbarButton[] = [
        {
            ariaLabel: 'Minimize window button',
            icon: 'minimize',
            action: this.minimize.bind(this)
        },
        {
            ariaLabel: 'Close window button',
            icon: 'close',
            action: this.close.bind(this)
        }
    ];

    readonly extraButtons: ExtraTopbarButton[] = [
        {
            icon: 'dark_mode',
            ariaLabel: 'Change theme to dark',
            action: this.change.bind(this, 'dark')
        },
        {
            icon: 'light_mode',
            ariaLabel: 'Change theme to light',
            action: this.change.bind(this, 'light')
        },
        {
            textContent: 'login',
            action: () => this.router.navigate(['/login'])
        },
        {
            textContent: 'dashboard',
            action: () => this.router.navigate(['/dashboard'])
        },
    ];
    
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
