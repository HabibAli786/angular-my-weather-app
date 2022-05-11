import { Weather } from './../../Weather/weather';
import { Action } from "@ngrx/store";

export const ADD_Favourite = '[Favourite] Add'
export const Edit_Favourite = '[Favourite] Edit'
export const Hide_Favourite = '[Favourite] Hide'

export class AddFavourite implements Action {
    readonly type = ADD_Favourite

    constructor(public payload: {}) {

    }
}

export class EditFavourite implements Action {
    readonly type = Edit_Favourite

    constructor(public payload: any) {

    }
}

export class HideFavourite implements Action {
    readonly type = Hide_Favourite

    constructor(public payload: { city: string, display: boolean }) {

    }
}

export type All
 = AddFavourite
   | EditFavourite
   | HideFavourite