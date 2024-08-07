import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ElectronService } from '@lars/core';

@Component({
    selector: 'lars-topbar',
    templateUrl: './topbar.component.html',
    styleUrl: './topbar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopbarComponent {
    private readonly electron = inject(ElectronService);
    
    close(): void {
        void this.electron.ipcRenderer?.send('close');
    }
    minimize(): void {
        void this.electron.ipcRenderer?.send('minimize');
    }
}
