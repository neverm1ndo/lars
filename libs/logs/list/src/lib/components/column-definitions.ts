import { DateTime } from 'luxon';
import type { ColDef } from 'ag-grid-community';

import { ProcessCellComponent } from './process-cell.component';
import { ContentCellComponent } from './content-cell.component';
import { IpCellComponent } from './ip-cell.component';

export const logsColDefs: ColDef[] = [
  {
    field: 'date',
    headerName: 'Дата',
    minWidth: 100,
    valueFormatter: ({ data }) => DateTime.fromISO(data.date).toFormat('dd LLL yyyy HH:mm:ss', { locale: 'ru' })
  },
  {
    field: 'process',
    headerName: 'Процесс',
    cellRenderer: ProcessCellComponent
  },
  {
    field: 'user.nickname',
    headerName: 'Никнейм'
  },
  {
    field: 'message',
    headerName: 'Сообщение',
    cellRenderer: ContentCellComponent
  },
  {
    field: 'serials.ip',
    headerName: 'IP',
    minWidth: 100,
    maxWidth: 130,
    cellRenderer: IpCellComponent
  },
  {
    field: 'serials.org',
    headerName: 'Провайдер',
    minWidth: 100
  },
  {
    field: 'serials.as',
    headerName: 'AS',
    maxWidth: 70
  },
  {
    field: 'serials.ss',
    headerName: 'SS',
    minWidth: 100
  },
  {
    field: 'serials.cn',
    headerName: 'CN',
    minWidth: 100
  },
  {
    field: 'serials.cc',
    headerName: 'CC',
    maxWidth: 50
  },
  {
    field: 'serials.cli',
    headerName: 'Клиент',
    maxWidth: 80
  }
];
