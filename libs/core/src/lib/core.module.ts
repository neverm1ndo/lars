import { InjectionToken, NgModule } from '@angular/core';
import { ElectronService, StorageService, ThemeManagerService } from './services';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage');

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    ElectronService,
    StorageService,
    ThemeManagerService,
    { provide: BROWSER_STORAGE, useFactory: () => localStorage }
  ]
})
export class CoreModule { }
