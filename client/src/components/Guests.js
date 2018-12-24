import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRsvp } from '../actions/guestsActions'

class Rsvp extends Component {
    componentDidMount() {
        this.props.getRsvp()
    }

    render() {
        const { guest } = this.props.guests

        return (
            <section>
                <h2>Guests</h2>
                { guest.length && (
                    guest.map((list, idx) =>
                        <div key={idx}>
                            <li>{list.name}</li>
                            <li>{list.attend}</li>
                            <li>{list.adults}</li>
                            <li>{list.kids}</li>
                        </div>
                    )
                )}
            </section>
        )
    }
}

const mapStateToProps = state => ({
    guests: state.guests
})

export default connect(mapStateToProps, { getRsvp })(Rsvp)