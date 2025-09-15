import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LogsState, featureKey } from './logs.reducer';

const logsSelectFeature = createFeatureSelector<LogsState>(featureKey);

const selectLogsFilter = createSelector(logsSelectFeature, ({ filter }) => filter);
const selectLogsList = createSelector(logsSelectFeature, ({ listItems }) => listItems);
const selectLastLineId = createSelector(logsSelectFeature, ({ listItems }) => listItems.at(-1)?._id);
const selectIsLoadingLogs = createSelector(logsSelectFeature, ({ isLoading }) => isLoading);

const selectLogsAppearanceSettings = createSelector(logsSelectFeature, ({ settings }) => settings);

export const selectors = {
  selectLogsFilter,
  selectLogsList,
  selectLastLineId,
  selectIsLoadingLogs,
  selectLogsAppearanceSettings
};