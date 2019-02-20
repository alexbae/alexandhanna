import axios from 'axios'

import { GET_ENGLISH, GET_KOREAN } from './types'

export const setEnglish = () => {
    return ({
        type: GET_ENGLISH,
        payload: 'english'
    })
}

export const setKorean = () => {
    return ({
        type: GET_KOREAN,
        payload: 'korean'
    })
}