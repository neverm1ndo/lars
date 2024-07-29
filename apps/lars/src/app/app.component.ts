import { Component, inject } from '@angular/core';
import { ElectronService } from '@lars/core';
@Component({
    selector: 'lars-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    public title = 'LARS';

    isElectron = inject(ElectronService).isElectron;

    constructor() {
        const yellow = 'color: yellow;';
        const warnTitle = 'font-size: 24px; font-weight: bold;';

        console.warn(
            `%c[WARNING]\n%cНичего не вводите и не копируйте из консоли. Это может привести к потере данных от аккаунта или некорректной работе программы. Информация ниже предназначена только для разработчиков приложения.`,
            `${yellow}; ${warnTitle}`,
            'font-size: 16px;'
        );
    }
}
