import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromProfile from './state+/profile.reducer';

import { ProfileEffects } from './state+/profile.effects';
import { ProfileFacade } from './application/profile.facade';
import { ProfileService } from './infrastructure/profile.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromProfile.featureKey, fromProfile.userReducer),
    EffectsModule.forFeature([ProfileEffects])
  ],
  providers: [
    ProfileFacade,
    ProfileService
  ]
})
export class ProfileDomainModule {}
