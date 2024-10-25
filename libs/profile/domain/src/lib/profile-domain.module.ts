import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromProfile from './state+/profile.reducer';
// import { UserFacade } from './application';
import { ProfileEffects } from './state+/profile.effects';
import { ProfileFacade } from './application/profile.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromProfile.featureKey, fromProfile.userReducer),
    EffectsModule.forFeature([ProfileEffects])
  ],
  providers: [
    ProfileFacade
  ]
})
export class ProfileDomainModule {}
