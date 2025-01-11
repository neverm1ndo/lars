export type LogsRequestType = 'last' | 'search';
export type LogsRequestDateInterval = { from: string; to: string };
export type LogsRequestParams = {
  query: string;
  page: number;
  limit: number;
  filter?: string[];
  date?: Partial<LogsRequestDateInterval>; 
};

interface ContentData {
  time: string;
  oid: number;
  auth: any;
  dm_id: string;
  op: string;
  weapon: string;
  message: string;
  target: ContentDataTarget;
  props: ContentDataProps;
  action: string;
  targetType: string;
  numbers: number[];
  cn: string;
  editor: {
    editor_id: number;
    g: string;
    players: number;
    visitors: number;
  };
}

export type LogsContentData = Partial<ContentData>;

export type ContentDataTarget = {
  username: string;
  id: number;
};

export type ContentDataProps = {
  [key: string]: any;
};

export interface LogLine {
  unix: number;
  date: string;
  process: string;
  nickname?: string;
  id: number;
  geo?: LogsGeoData;
  content?: ContentData;
  multiplier?: number;
}

export interface LogsGeoData {
  country?: string;
  cc?: string;
  ip?: string;
  as?: number;
  ss?: string;
  org?: string;
  cli?: string;
}

export interface LogsAppearanceSettings {
  chunkSize: number;
}