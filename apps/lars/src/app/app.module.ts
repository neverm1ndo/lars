import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

/** Material modules */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/** LARS modules */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { TranslocoRootModule } from './transloco-root.module';
import { CoreModule } from '@lars/core';

const MAT_MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  declarations: [AppComponent, TopbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslocoRootModule,
    ...MAT_MODULES,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()), 
    provideAnimationsAsync(),
    importProvidersFrom(CoreModule)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
