import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitRsvp } from '../../actions/guestsActions'

class Rsvp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attend: false,
            side: null,
            name: "",
            email: "",
            adults: 1,
            kids: 0
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        console.log("eeee", e.target.name)
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        
        const guestData = {
            attend: this.state.attend,
            side: this.state.side,
            name: this.state.name,
            email: this.state.email,
            adults: this.state.adults,
            kids: this.state.kids
        }

        this.props.submitRsvp(guestData)
    }

    render() {
        return (
            <section>
                <div className="center">
                    <h2 className="header">RSVP</h2>
                    <form>
                        <div>
                            <label>Are you attending?</label>
                            <label><input type="radio" name="attend" value="1" onChange={this.onChange} />Yes</label>
                            <label><input type="radio" name="attend" value="0" onChange={this.onChange} />No</label>
                        </div>
                        <div>
                            <label>Which side?</label>
                            <label><input type="radio" name="side" value="groom" onChange={this.onChange} />Groom</label>
                            <label><input type="radio" name="side" value="bride" onChange={this.onChange} />Bride</label>
                        </div>
                        <div>
                            <label>Name</label>
                            <input type="text" name="name" onChange={this.onChange} />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" name="email" onChange={this.onChange} />
                        </div>
                        <div>
                            <label>Total adults</label>
                            <select name="adults" onChange={this.onChange}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
                        <div>
                            <label>Total kids</label>
                            <select name="kids" onChange={this.onChange}>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
                        <input type="submit" value="Submit" onClick={this.onSubmit} />
                    </form>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    guests: state.guests
})

export default connect(mapStateToProps, { submitRsvp })(Rsvp)