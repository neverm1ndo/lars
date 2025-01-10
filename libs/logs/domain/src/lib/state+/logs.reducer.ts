import { createReducer, on } from '@ngrx/store';
import { actions as LogsActions } from './logs.actions';
import { LogLine } from '../entities/logs';

export interface LogsState {
  listItems: LogLine[];
  filter: string[];
  isLoading: boolean;
  currentPage: number;
}

export const featureKey = 'Logs';

const initialState: LogsState = {
  listItems: [],
  filter: [],
  isLoading: true,
  currentPage: 0
};

export const logsReducer = createReducer(
  initialState,
  on(
    LogsActions.fetchLogsListSuccess,
    (state, { lines }): LogsState => ({
      ...state,
      listItems: [...state.listItems, ...lines]
    })
  )
);