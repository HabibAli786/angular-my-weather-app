import { Action } from "@ngrx/store";

export const EDIT_TEXT = '[Post] Edit'

export class EditText implements Action {
    readonly type = EDIT_TEXT

    constructor(public payload: string) {

    }
}

export type All
 = EditText