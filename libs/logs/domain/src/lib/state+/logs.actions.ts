import { createAction, props } from '@ngrx/store';

import { LogsAppearanceSettingsProps, LogsListIsLoadingProps, LogsListProps, SearchQuery } from './logs.models';

const setIsLogsListLoading = createAction('[Logs] Set isLoading state', props<LogsListIsLoadingProps>());

const fetchLogs = createAction('[Logs] Fetch logs');
const fetchLogsListSuccess = createAction('[Logs] Fetch logs success', props<LogsListProps>());
const fetchLogsListError = createAction('[Logs] Fetch logs error', props<any>());
const search = createAction('[Logs] Search logs', props<SearchQuery>());

const getLogsAppearanceSettingsFromStorage = createAction('[Logs] Get logs appearance from local storage');
const setLogsAppearanceSettings = createAction(
  '[Logs] Set logs appearance settings',
  props<LogsAppearanceSettingsProps>()
);

export const actions = {
  setIsLogsListLoading,
  fetchLogs,
  fetchLogsListSuccess,
  fetchLogsListError,
  search,
  getLogsAppearanceSettingsFromStorage,
  setLogsAppearanceSettings
};
