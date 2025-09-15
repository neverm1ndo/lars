import { inject, Injectable } from '@angular/core';

import { catchError, combineLatest, filter, map, of, switchMap, tap } from 'rxjs';

import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { StorageService } from '@lars/core';

import { actions } from './logs.actions';
import { LogsDataService } from '../infrastructure/logs-data.service';
import { LogsFacade } from '../application/logs.facade';
import { LOCALSTORAGE_LOGS_APPEARANCE_SETTINGS_KEY } from '../constants/logs.storage.keys';
import { LogsAppearanceSettings } from '../entities';

@Injectable()
export class LogsEffects implements OnInitEffects {
  private readonly actions$ = inject(Actions);
  private readonly storage = inject(StorageService);
  private readonly logsDataService = inject(LogsDataService);
  private readonly logsFacade = inject(LogsFacade);

  fetchLogsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.fetchLogs),
      switchMap(() => combineLatest([this.logsFacade.getLogsAppearanceSettings(), this.logsFacade.last$])),
      tap(() => this.logsFacade.setIsLoadingState(true)),
      switchMap(([settings, last]) =>
        this.logsDataService.fetchLogs({ query: '', last, limit: settings.chunkSize }).pipe(
          map((lines) => actions.fetchLogsListSuccess({ lines })),
          catchError(({ message }) => of(actions.fetchLogsListError({ message }))),
          tap(() => this.logsFacade.setIsLoadingState(false))
        )
      )
    )
  );

  setLogsAppearanceSettingsEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.setLogsAppearanceSettings),
        tap(({ chunkSize }) =>
          this.storage.set(LOCALSTORAGE_LOGS_APPEARANCE_SETTINGS_KEY, {
            chunkSize
          })
        )
      ),
    { dispatch: false }
  );

  getLogsAppearanceSettingsFronLocalStorageEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getLogsAppearanceSettingsFromStorage),
      map(() => this.storage.get(LOCALSTORAGE_LOGS_APPEARANCE_SETTINGS_KEY) as LogsAppearanceSettings),
      map((settings) => actions.setLogsAppearanceSettings(settings))
    )
  );

  ngrxOnInitEffects(): Action {
    return actions.getLogsAppearanceSettingsFromStorage();
  }
}
