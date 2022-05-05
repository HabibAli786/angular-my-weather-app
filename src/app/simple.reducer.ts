import { Action } from '@ngrx/store'

export function SimpleReducer(state: string = 'Hello World', action: Action) {
    console.log(action.type, state)

    switch(action.type) {
        case 'Go':
            return state = 'GO'

        case 'Stop':
            return state = 'Stop'

        default:
            return state = null
    }
}