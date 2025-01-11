import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectors as LogsSelectors, actions as LogsActions } from "../state+";

@Injectable()
export class LogsFacade {
    private readonly store = inject(Store);

    readonly currentLogsPageIndex$ = this.store.select(LogsSelectors.selectCurrentLogsPageIndex);

    setLogsAppearamceSettings(settings: any): void {
        this.store.dispatch(LogsActions.setLogsAppearanceSettings(settings));
    }

    getLogsAppearamceSettings() {
        return this.store.select(LogsSelectors.selectLogsAppearanceSettings);
    }
}