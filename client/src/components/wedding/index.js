import React, { Component } from 'react'
import Main from './Main'
import Rsvp from './Rsvp'
import Others from './Others'
import Photos from './Photos'

class Wedding extends Component {
    render() {
        return (
            <>
                <Main />
                <Rsvp />
                <Photos />
                <Others />
            </>
        )
    }
}

export default Wedding