import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRsvp } from '../actions/guestsActions'
import Footer from './wedding/Footer'

class Rsvp extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            guests: null
        }
    }

    componentDidMount() {
        this.props.getRsvp()
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

        const hasGuests = guests && guests.length > 0

        const counter = side => {
            let total = 0
            let adults = 0
            let kids = 0

            if (hasGuests) {
                guests.map(guest => {
                    if(guest.side === side && guest.attend) {
                        adults += guest.adults
                        kids += guest.kids
                    }

                    return total = adults + kids
                })
            }

            return { total, adults, kids }
        }

        const totalCount = () => {
            let total = 0
            let adults = 0
            let kids = 0

            adults = counter('groom').adults + counter('bride').adults
            kids = counter('groom').kids + counter('bride').kids
            total = adults + kids

            return { total, adults, kids }
        }

        return (
            <>
                <section className="guest-list">
                    <div className="center">
                        <h1 className="header">Guests List</h1>
                        <p>Total : {totalCount().total} (Adults : {totalCount().adults}, Kids : {totalCount().kids})</p>
                        <div className="guest-side">
                            Alex's side : adults {counter('groom').adults} (kids {counter('groom').kids})
                            <table>
                                <tbody>
                                    <tr className="tr-head">
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
                                </tbody>
                            </table>
                        </div>
                        <div className="guest-side">
                            Hanna's side : adults {counter('bride').adults} (kids {counter('bride').kids})
                            <table>
                                <tbody>
                                    <tr className="tr-head">
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}

const mapStateToProps = state => {
    return ({
        guests: state.guests
    })
} 

export default connect(mapStateToProps, { getRsvp })(Rsvp)