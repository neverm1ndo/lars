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
import { ProfileDomainModule } from '@lars/profile/domain';
import { CoreModule } from '@lars/core';


/** Transloco modules */
import { TranslocoRootModule } from '@lars/i18n';
import { provideTranslocoMessageformat } from '@jsverse/transloco-messageformat';

/** NgRx modules */
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';

const MAT_MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
];

const NGRX_MODULES = [
  StoreModule.forRoot({ router: routerReducer }, {}),
  EffectsModule.forRoot([]),
  StoreRouterConnectingModule.forRoot()
]

@NgModule({
  declarations: [AppComponent, TopbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslocoRootModule,
    ProfileDomainModule,
    ...NGRX_MODULES,
    ...MAT_MODULES,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()), 
    provideAnimationsAsync(),
    provideTranslocoMessageformat({
      locales: 'ru-RU'
    }),
    importProvidersFrom(CoreModule),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
