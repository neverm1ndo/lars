import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectors as LogsSelectors } from "../state+";

@Injectable()
export class LogsFacade {
    private readonly store = inject(Store);

    readonly currentLogsPageIndex$ = this.store.select(LogsSelectors.selectCurrentLogsPageIndex); 
}