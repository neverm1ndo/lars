import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { combineLatest, filter, map, switchMap, tap } from "rxjs";

import { actions } from "./logs.actions";
import { LogsDataService } from "../infrastructure/logs-data.service";
import { LogsFacade } from "../application/logs.facade";

@Injectable()
export class LogsEffects {
    private readonly actions$ = inject(Actions);
    private readonly logsDataService = inject(LogsDataService);
    private readonly logsFacade = inject(LogsFacade);

    fetchLogsEffect$ = createEffect(() => this.actions$.pipe(
        ofType(actions.fetchLogs)
    ));
}