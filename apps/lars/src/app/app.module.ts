import { NgModule } from '@angular/core';
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
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

/** LARS modules */
import { CoreModule } from '@lars/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';

const MAT_MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatButtonModule
];

@NgModule({
  declarations: [AppComponent, TopbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ...MAT_MODULES
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()), 
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
