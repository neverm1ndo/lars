import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectronService, StorageService } from './services';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage');

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ElectronService,
    StorageService,
    { provide: BROWSER_STORAGE, useFactory: () => localStorage }
  ]
})
export class CoreModule { }
