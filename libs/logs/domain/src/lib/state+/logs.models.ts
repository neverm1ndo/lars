import { LogLine, LogsRequestParams } from "../entities/logs";

export interface LogsFetchParamsProps {
    requestType: 'last' | 'search';
    queryParams: LogsRequestParams;
}

export interface LogsListProps {
    lines: LogLine[];
}