import { SUBMIT_RSVP, GET_RSVP } from '../actions/types'

const initialState = {
    guest: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SUBMIT_RSVP:
            return {
                ...state,
                guest: action.payload
            }
        case GET_RSVP:
            return {
                ...state,
                guest: action.payload
            }
        default:
            return state;
    }
}