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
            <section className="guest-list">
                <div className="center">
                    <h2>Guests List</h2>
                    <div className="guest-side">
                        Groom's side
                        <table>
                            <tr>
                                <td>Name</td>
                                <td>Status</td>
                                <td>Adults</td>
                                <td>Kids</td>
                            </tr>
                            { guests && guests.length && (
                                guests.map((guest, idx) =>
                                    guest.side === 'groom' && (
                                        <tr key={idx} className={guest.attend ? "attend" : "not-attend"}>
                                            <td>{guest.name}</td>
                                            <td>{guest.attend ? "attending" : "not attending"}</td>
                                            <td>{guest.adults}</td>
                                            <td>{guest.kids}</td>
                                        </tr>
                                    )
                                )
                            )}
                        </table>
                    </div>
                    <div className="guest-side">
                        Bride's side
                        <table>
                            <tr>
                                <td>Name</td>
                                <td>Status</td>
                                <td>Adults</td>
                                <td>Kids</td>
                            </tr>
                            { guests && guests.length && (
                                guests.map((guest, idx) =>
                                    guest.side === 'bride' && (
                                        <tr key={idx} className={guest.attend ? "attend" : "not-attend"}>
                                            <td>{guest.name}</td>
                                            <td>{guest.attend ? "attending" : "not attending"}</td>
                                            <td>{guest.adults}</td>
                                            <td>{guest.kids}</td>
                                        </tr>
                                    )
                                )
                            )}
                        </table>
                    </div>
                </div>
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