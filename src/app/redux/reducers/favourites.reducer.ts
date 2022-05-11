import { Hide_Favourite } from './../actions/favourites.action';
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

        case Favourites.Edit_Favourite:
            return {
                ...state,
                cities: state.cities.map((city: any) => {
                    // console.log(city.cityName, action.payload.location.name)
                    if(city.cityName === action.payload.location.name.toLowerCase()) {
                        return {
                            ...city,
                            data: action.payload
                        }
                    } else {
                        return {
                            ...city
                        }
                    }
                    console.log(city.cityName)
                })
            }

            case Favourites.Hide_Favourite:
                return {
                    ...state,
                    cities: state.cities.map((city: any) => {
                        if(city.cityName === action.payload.city) {
                            return {
                                ...city,
                                displayText: action.payload.display
                            }
                        } else {
                            return {
                                ...city
                            }
                        }
                    })
                }

        default:
            return state
    }
}