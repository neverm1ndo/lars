import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { selectors as LogsSelectors, actions as LogsActions } from '../state+';
import { LogLine, LogsAppearanceSettings } from '../entities';

@Injectable()
export class LogsFacade {
  private readonly store = inject(Store);

  readonly last$ = this.store.select(LogsSelectors.selectLastLineId);

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

  search(query: string) {
    this.store.dispatch(LogsActions.search({ query }));
  }

  getLogsList(): Observable<LogLine[]> {
    return this.store.select(LogsSelectors.selectLogsList);
  }
}
