import { Injectable, Type } from '@angular/core';
import { FlatLogLine, LogLine, LogsContentData } from '@lars/logs/domain';
import { StringCellComponent } from '../components/string-cell.component';


const GRID_CONTENT_COMPONENTS = new Map<keyof LogsContentData, Type<unknown>>([
    ['message', StringCellComponent]
]);

@Injectable()
export class LogsGridService {
    flatColumns({
        date,
        unix,
        process,
        nickname,
        id,
        multiplier,
        content,
        geo
    }: LogLine): FlatLogLine {
        const flatten: FlatLogLine = {
            date,
            unix,
            process,
            nickname,
            id,
            multiplier,
            cn: content?.cn,
            ...geo
        };

        if (content) {
            GRID_CONTENT_COMPONENTS.forEach((value, key, map) => {
                flatten.content = content[key]
            });
        }



        return flatten;
    }
}
