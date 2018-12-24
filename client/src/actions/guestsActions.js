import axios from 'axios'

import { SUBMIT_RSVP, GET_RSVP, GET_ERRORS } from './types'

export const submitRsvp = guestData => dispatch => {
    axios
        .post('/api/guests', guestData)
        .then(res => 
            dispatch({
                type: SUBMIT_RSVP,
                payload: guestData
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })    
        )
}

export const getRsvp = () => dispatch => {
    axios
        .get('/api/guests')
        .then(res =>
            dispatch({
                type: GET_RSVP,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: null
            })    
        )
}