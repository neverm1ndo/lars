import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { selectors as LogsSelectors, actions as LogsActions } from "../state+";
import { LogLine, LogsAppearanceSettings } from "../entities";

@Injectable()
export class LogsFacade {
    private readonly store = inject(Store);

    readonly currentLogsPageIndex$ = this.store.select(LogsSelectors.selectCurrentLogsPageIndex);

    setLogsAppearamceSettings(settings: any): void {
        this.store.dispatch(LogsActions.setLogsAppearanceSettings(settings));
    }

    getLogsAppearanceSettings(): Observable<LogsAppearanceSettings> {
        return this.store.select(LogsSelectors.selectLogsAppearanceSettings);
    }

    setIsLoadingState(isLoading: boolean): void {
        return this.store.dispatch(LogsActions.setIsLogsListLoading({ isLoading }));
    }

    getIsLoadingState() {
        return this.store.select(LogsSelectors.selectIsLoadingLogs);
    }

    fetchLogsList() {
        this.store.dispatch(LogsActions.fetchLogs());
    }

    getLogsList(): Observable<LogLine[]> {
        return this.store.select(LogsSelectors.selectLogsList);
    }
}