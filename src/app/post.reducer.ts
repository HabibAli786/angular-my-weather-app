import { Post } from './post.model';
import * as PostActions from './post.action'

export type Action = PostActions.All

const defaultState: Post = {
    text: 'I am coming from NgRx Post Reducer'
}

const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

export function PostReducer(state: Post = defaultState, action: Action) {
    console.log(action.type, state)

    switch (action.type) {
        case PostActions.EDIT_TEXT:
            return newState(state, { text: action.payload })

        default:
            return state
    }
}