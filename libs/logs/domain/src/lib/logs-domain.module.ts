import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import * as fromProfile from './state+/logs.reducer';
import { LogsEffects } from './state+';
import { LogsFacade } from './application/logs.facade';
import { LogsDataService } from './infrastructure/logs-data.service';

@NgModule({
  imports: [
    StoreModule.forFeature(fromProfile.featureKey, fromProfile.logsReducer),
    EffectsModule.forFeature([LogsEffects])
  ],
  providers: [
    LogsFacade,
    LogsDataService
  ]
})
export class LogsDomainModule {}
