import React, { Component } from 'react'
import Main from './Main'
import Rsvp from './Rsvp'
import Story from './Story'
import Others from './Others'
import Photos from './Photos'

class Wedding extends Component {
    render() {
        return (
            <>
                <Main />
                <Rsvp />
                <Story />
                <Photos />
                <Others />
            </>
        )
    }
}

export default Wedding