import { createAction, props } from "@ngrx/store";
import { LogsFetchParamsProps, LogsListProps } from "./logs.models";

const fetchLogs = createAction('[Logs] Fetch logs', props<LogsListProps>());
const fetchLogsListSuccess = createAction('[Logs] Fetch logs success', props<LogsListProps>());
const fetchLogsListError = createAction('[Logs] Fetch logs error', props<any>());

export const actions = {
    fetchLogs,
    fetchLogsListSuccess,
    fetchLogsListError
};