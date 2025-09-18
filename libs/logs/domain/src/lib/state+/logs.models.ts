import { LogLine, LogsRequestParams } from '../entities/logs';

export interface LogsFetchParamsProps {
  queryParams: LogsRequestParams;
}

export interface LogsListProps {
  lines: LogLine[];
}

export interface LogsAppearanceSettingsProps {
  chunkSize: number;
}

export interface LogsListIsLoadingProps {
  isLoading: boolean;
}

export interface SearchQuery {
  query: string;
}
