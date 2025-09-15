import { Injectable, Type } from '@angular/core';
import { LogLine } from '@lars/logs/domain';
import { StringCellComponent } from '../components/string-cell.component';


// const GRID_CONTENT_COMPONENTS = new Map<keyof LogsContentData, Type<unknown>>([
//     ['message', StringCellComponent]
// ]);

@Injectable()
export class LogsGridService {
    // flatColumns({
    //     date,
    //     unix,
    //     process,
    //     nickname,
    //     id,
    //     multi,
    //     content,
    //     geo
    // }: LogLine): FlatLogLine {
    //     const flatten: FlatLogLine = {
    //         date,
    //         unix,
    //         process,
    //         nickname,
    //         id,
    //         multi,
    //         cn: content?.cn,
    //         ...geo
    //     };

    //     if (content) {
    //         GRID_CONTENT_COMPONENTS.forEach((value, key, map) => {
    //             flatten.content = content[key]
    //         });
    //     }



    //     return flatten;
    // }
}
