import React, { Component } from 'react'
import Main from './Main'
import Rsvp from './Rsvp'
import Others from './Others'
import Photos from './Photos'
import Registry from './Registry'

class Wedding extends Component {
    render() {
        return (
            <>
                <Main />
                <Rsvp />
                <Photos />
                <Registry />
                <Others />
            </>
        )
    }
}

export default Wedding