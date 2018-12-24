import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRsvp } from '../actions/guestsActions'

class Rsvp extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            guests: null
        }
    }

    componentDidMount() {
        this.props.getRsvp()

        console.log('sfsdfssff', this.props)
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidUpdate(prevProps) {
        if (prevProps.guests !== this.props.guests) {
            this.setState({
                guests: this.props.guests.guest
            })
        }
    }

    render() {
        const { guests } = this.state

        return (
            <section>
                <h2>Guests</h2>
                { guests && guests.length && (
                    guests.map((guest, idx) =>
                        <div key={idx}>
                            <li>{guest.name}</li>
                            <li>{guest.attend}</li>
                            <li>{guest.adults}</li>
                            <li>{guest.kids}</li>
                        </div>
                    )
                )}
            </section>
        )
    }
}

const mapStateToProps = state => {
    console.log('state', state)
    return ({
        guests: state.guests
    })
} 

export default connect(mapStateToProps, { getRsvp })(Rsvp)