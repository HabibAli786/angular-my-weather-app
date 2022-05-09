import { Action } from "@ngrx/store";

export const ADD_Favourite = '[Favourite] Edit'

export class AddFavourite implements Action {
    readonly type = ADD_Favourite

    constructor(public payload: string) {

    }
}

export type All
 = AddFavourite