import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { jwtInterceptor } from '@lars/core';

import * as fromLogs from './state+/logs.reducer';
import { LogsEffects } from './state+';
import { LogsFacade } from './application/logs.facade';
import { LogsDataService } from './infrastructure/logs-data.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { LogsGridService } from './infrastructure/logs-grid.service';

@NgModule({
  imports: [
    StoreModule.forFeature(fromLogs.featureKey, fromLogs.logsReducer),
    EffectsModule.forFeature([LogsEffects])
  ],
  providers: [
    LogsFacade,
    LogsDataService,
    LogsGridService,
    provideHttpClient(
      withInterceptors([jwtInterceptor])
    )
  ]
})
export class LogsDomainModule {}
