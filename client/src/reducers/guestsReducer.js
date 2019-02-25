import { SUBMIT_RSVP, GET_RSVP, GET_ERRORS } from '../actions/types'

const initialState = {
    guest: {
        name: null,
        email: null,
        attend: false,
        adult: 0,
        kids: 0,
        otherName: null
    }
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
        case GET_ERRORS:
            return {
                error: action.payload
            }
        default:
            return state;
    }
}