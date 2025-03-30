import { DateTime } from 'luxon';
import type { ColDef } from 'ag-grid-community';

import { ProcessCellComponent } from './process-cell.component';
import { ContentCellComponent } from './content-cell.component';
import { GeodataCellComponent } from './geodata-cell.component';

export const logsColDefs: ColDef[] = [
    { 
        field: 'date',
        headerName: 'Дата',
        maxWidth: 100,
        minWidth: 100,
        valueFormatter: ({ data }) => DateTime.fromISO(data.date).toFormat('dd LLL yyyy', { locale: 'ru' })
    },
    {
        field: 'process',
        headerName: 'Процесс',
        cellRenderer: ProcessCellComponent
    },
    { 
        field: 'nickname',
        headerName: 'Никнейм'
    },
    {
        field: 'id',
        headerName: 'ID',
        width: 50,
        maxWidth: 50,
        minWidth: 50
    },
    {
        field: 'geo',
        headerName: 'Геодата',
        minWidth: 100,
        cellRenderer: GeodataCellComponent
    },
    {
        field: 'content',
        headerName: '',
        cellRenderer: ContentCellComponent
    }
];