export type LogsRequestDateInterval = { from: string; to: string };
export type LogsRequestParams = {
  query: string;
  last?: string;
  limit: number;
  date?: Partial<LogsRequestDateInterval>; 
};


export type ContentDataTarget = {
  username: string;
  id: number;
};

export type ContentDataProps = {
  [key: string]: any;
};

export type LogPlayer = {
  nickname: string;
  id: string;
}

export type LogTime = {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export type LogSerialNumbers = {
  country: string;
  cc: string;
  ip: string;
  as: number;
  ss: string;
  org: string;
  cli: string;
}

export type LogSubject = {
  admin?: {
    id: number;
    name: string;
  },
  role: 'Администратор' | 'Игрок' | 'Разработчик'
}

export type EditorAction = {
  [x: string]: number | string;
  editor_id: number;
  group: 'owner' | 'guest'
}

export type LogLine = {
  _id: string;
  unix: number;
  date: string;
  process: string;
  user: LogPlayer;
  time?: LogTime;
  numbers?: number[];
  subject?: LogSubject;
  death?: string;
  message?: string;
  serials?: LogSerialNumbers;
  editor?: EditorAction;
  multi?: number;
}

export interface LogsAppearanceSettings {
  chunkSize: number;
}