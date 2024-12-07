import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import * as fromProfile from './state+/logs.reducer';
import { LogsEffects } from './state+';
import { LogsFacade } from './application/logs.facade';

@NgModule({
  imports: [
    StoreModule.forFeature(fromProfile.featureKey, fromProfile.userReducer),
    EffectsModule.forFeature([LogsEffects])
  ],
  providers: [
    LogsFacade
  ]
})
export class LogsDomainModule {}
