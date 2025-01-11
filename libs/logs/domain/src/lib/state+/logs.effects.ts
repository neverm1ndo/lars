import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType, OnInitEffects } from "@ngrx/effects";

import { combineLatest, filter, map, switchMap, tap } from "rxjs";

import { actions } from "./logs.actions";
import { LogsDataService } from "../infrastructure/logs-data.service";
import { LogsFacade } from "../application/logs.facade";
import { StorageService } from "@lars/core";
import { Action } from "@ngrx/store";
import { LOCALSTORAGE_LOGS_APPEARANCE_SETTINGS_KEY } from "../constants/logs.storage.keys";
import { LogsAppearanceSettings } from "../entities";

@Injectable()
export class LogsEffects implements OnInitEffects {
    private readonly actions$ = inject(Actions);
    private readonly logsDataService = inject(LogsDataService);
    private readonly storage = inject(StorageService);

    fetchLogsEffect$ = createEffect(() => this.actions$.pipe(
        ofType(actions.fetchLogs)
    ));

    setLogsAppearanceSettingsEffect$ = createEffect(() => this.actions$.pipe(
        ofType(actions.setLogsAppearanceSettings),
        tap(({ chunkSize }) => this.storage.set(LOCALSTORAGE_LOGS_APPEARANCE_SETTINGS_KEY, {
            chunkSize
        }))
    ), { dispatch: false });

    getLogsAppearanceSettingsFronLocalStorageEffect$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getLogsAppearanceSettingsFromStorage),
        map(() => this.storage.get(LOCALSTORAGE_LOGS_APPEARANCE_SETTINGS_KEY) as LogsAppearanceSettings),
        map((settings) => actions.setLogsAppearanceSettings(settings))
    ));

    ngrxOnInitEffects(): Action {
        return actions.getLogsAppearanceSettingsFromStorage();
    }
}