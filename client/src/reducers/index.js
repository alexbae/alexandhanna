import { combineReducers } from 'redux'
import guestsReducer from './guestsReducer'
import langReducer from './langReducer'

export default combineReducers({
    guests: guestsReducer,
    lang: langReducer
})