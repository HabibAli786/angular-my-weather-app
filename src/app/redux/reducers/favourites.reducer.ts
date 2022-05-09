import { Favourite } from './../models/favourites.model';
import * as Favourites from '../actions/favourites.action'

export type Action = Favourites.All

const defaultState: Favourite = {
    cities: []
}

const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

export function FavouriteReducer(state: Favourite = defaultState, action: Action) {
    console.log(action.type, state)

    switch (action.type) {
        case Favourites.ADD_Favourite:
            return {
                ...state,
                cities: [...state.cities, action.payload]
            }

        default:
            return state
    }
}