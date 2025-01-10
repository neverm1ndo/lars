import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LogsState, featureKey } from './logs.reducer';

const userSelectFeature = createFeatureSelector<LogsState>(featureKey);

const selectLogsFilter = createSelector(userSelectFeature, ({ filter }) => filter);
const selectLogsList = createSelector(userSelectFeature, ({ listItems }) => listItems);
const selectCurrentLogsPageIndex = createSelector(userSelectFeature, ({ currentPage }) => currentPage);
const selectIsLoadingLogs = createSelector(userSelectFeature, ({ isLoading }) => isLoading);

export const selectors = {
  selectLogsFilter,
  selectLogsList,
  selectCurrentLogsPageIndex,
  selectIsLoadingLogs
};