import { createAction, props } from "@ngrx/store";

import { LogsAppearanceSettingsProps, LogsListProps } from "./logs.models";

const fetchLogs = createAction('[Logs] Fetch logs', props<LogsListProps>());
const fetchLogsListSuccess = createAction('[Logs] Fetch logs success', props<LogsListProps>());
const fetchLogsListError = createAction('[Logs] Fetch logs error', props<any>());

const getLogsAppearanceSettingsFromStorage = createAction('[Logs] Get logs appearance from local storage');
const setLogsAppearanceSettings = createAction('[Logs] Set logs appearance settings', props<LogsAppearanceSettingsProps>());

export const actions = {
    fetchLogs,
    fetchLogsListSuccess,
    fetchLogsListError,
    getLogsAppearanceSettingsFromStorage,
    setLogsAppearanceSettings
};