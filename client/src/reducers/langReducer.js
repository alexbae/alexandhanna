import { GET_ENGLISH, GET_KOREAN } from '../actions/types'

const initialState = {
    lang: 'english'
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ENGLISH:
        case GET_KOREAN:
            return {
                ...state,
                lang: action.payload
            }
        default:
            return state;
    }
}