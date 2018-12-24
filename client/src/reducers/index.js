import { combineReducers } from 'redux'
import guestsReducer from './guestsReducer'

export default combineReducers({
    guests: guestsReducer
})