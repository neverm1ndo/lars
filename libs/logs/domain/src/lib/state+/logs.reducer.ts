import { createReducer, on } from '@ngrx/store';
import { actions as LogsActions } from './logs.actions';
import { LogLine, LogsAppearanceSettings } from '../entities/logs';
import { DEFAULT_CHUNK_SIZE } from '../config/logs-default-settings';

export interface LogsState {
  listItems: LogLine[];
  filter: string[];
  isLoading: boolean;
  currentPage: number;
  settings: LogsAppearanceSettings;
}

export const featureKey = 'Logs';

const initialState: LogsState = {
  listItems: [],
  filter: [],
  isLoading: true,
  currentPage: 0,
  settings: {
    chunkSize: DEFAULT_CHUNK_SIZE
  }
};

export const logsReducer = createReducer(
  initialState,
  on(LogsActions.setIsLogsListLoading,
    (state, { isLoading }) => ({
      ...state,
      isLoading
    })
  ),
  on(
    LogsActions.fetchLogsListSuccess,
    (state, { lines }): LogsState => ({
      ...state,
      listItems: [...state.listItems, ...lines]
    })
  ),
  on(
    LogsActions.setLogsAppearanceSettings,
    (state, settings) => ({ ...state, settings })
  )
);