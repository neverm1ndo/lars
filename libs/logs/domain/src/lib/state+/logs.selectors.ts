import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LogsState, featureKey } from './logs.reducer';

const logsSelectFeature = createFeatureSelector<LogsState>(featureKey);

const selectLogsFilter = createSelector(logsSelectFeature, ({ filter }) => filter);
const selectLogsList = createSelector(logsSelectFeature, ({ listItems }) => listItems);
const selectCurrentLogsPageIndex = createSelector(logsSelectFeature, ({ currentPage }) => currentPage);
const selectIsLoadingLogs = createSelector(logsSelectFeature, ({ isLoading }) => isLoading);

const selectLogsAppearanceSettings = createSelector(logsSelectFeature, ({ settings }) => settings);

export const selectors = {
  selectLogsFilter,
  selectLogsList,
  selectCurrentLogsPageIndex,
  selectIsLoadingLogs,
  selectLogsAppearanceSettings
};