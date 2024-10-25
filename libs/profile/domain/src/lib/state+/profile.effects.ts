import { inject, Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";

@Injectable()
export class ProfileEffects {
    private readonly actions$ = inject(Actions);

}