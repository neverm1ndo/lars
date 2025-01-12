import { InjectionToken, NgModule } from '@angular/core';
import { ElectronService, ExternalLinksService, StorageService, ThemeManagerService } from './services';
import { LarsMenuService } from './services/menu/menu.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { jwtInterceptor } from './interceptors/jwt.interceptor';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage');

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    ElectronService,
    StorageService,
    ThemeManagerService,
    ExternalLinksService,
    LarsMenuService,
    { provide: BROWSER_STORAGE, useFactory: () => localStorage },
    // provideHttpClient(
    //   withInterceptors([jwtInterceptor])
    // )
  ]
})
export class CoreModule { }
