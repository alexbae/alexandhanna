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
            kids: 0,
            hasErrors: false,
            sumbitted: false,
            userExists: false
        }

        this.checkEmail = this.checkEmail.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({
            sumbitted: sessionStorage.getItem("@wedding/submitted"),
            userExists: true
        })
    }

    isValid(data) {
        if (data.side == null || data.name.trim() === "" || data.email.trim() === "") {
            return false
        }
        return true
    }

    onChange(e) {
        this.setState({ 
            [e.target.name]: e.target.value,
            hasErrors: false 
        })
    }

    checkEmail(e) {
        const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/
        
        const matchFormat = e.target.value.match(mailformat) ? true : false

        this.setState({
            hasErrors: !matchFormat
        })

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

        if (this.isValid(guestData)) {
            this.props.submitRsvp(guestData)
            this.setState({ hasErrors: false, sumbitted: true })
            sessionStorage.setItem("@wedding/submitted", true);
        } else {
            this.setState({ hasErrors: true })
        }

        window.scrollTo(0, document.getElementById('rsvp').offsetTop)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.guests.error) {
            this.setState({ userExists: true })
        }
    }

    render() {
        const { sumbitted, attend, hasErrors, userExists, alreadySumbitted } = this.state

        if(alreadySumbitted) {
            console.log('yes') 
        }

        return (
            <section>
                <div className="center">
                    <div className="hr" />
                    <h2 className="header" id="rsvp">RSVP</h2>
                    <p className="pb-1">Invitation card required to attending our wedding.</p>
                    {hasErrors &&
                        <p className="error-box mb-1">Please correct the fields and submit again.</p>
                    }
                    { sumbitted
                        ? <p className={"message-box"}>
                            {userExists 
                                ? "You already Submitted this RSVP. If you want to modify your RSVP, please contact to Alex or Hanna!" 
                                : attend === "1"
                                    ? "Thank you for you said attend our wedding, see you at our wedding!"
                                    : "Sorry to hear that, but please meet us in near future!"}
                        </p>
                        : <form>
                            <div>
                                <label className="tag">Will you attend?</label>
                                <label><input type="radio" name="attend" value="1" onChange={this.onChange} />Will attend</label>
                                <label><input type="radio" name="attend" value="0" onChange={this.onChange} />Unable to attend</label>
                            </div>
                            <div>
                                <label className="tag">Which side are you?</label>
                                <label><input type="radio" name="side" value="groom" onChange={this.onChange} />Groom</label>
                                <label><input type="radio" name="side" value="bride" onChange={this.onChange} />Bride</label>
                            </div>
                            <div>
                                <label className="tag">What your name?</label>
                                <input type="text" name="name" onChange={this.onChange} placeholder="Alex Bae" />
                            </div>
                            <div>
                                <label className="tag">What is your email?</label>
                                <input type="text" name="email" onChange={this.onChange} onBlur={this.checkEmail} placeholder="alexbae84@gmail.com" />
                            </div>
                            {attend === "1" && (
                                <>
                                    <div>
                                        <label className="tag">Total adults (includes you)</label>
                                        <select name="adults" onChange={this.onChange}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="tag">Total kids</label>
                                        <select name="kids" onChange={this.onChange}>
                                            <option>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </div>
                                </>
                            )}
                            <input type="submit" value="SUMBIT" disabled={hasErrors ? true : false} onClick={this.onSubmit} />
                        </form>
                    }
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    guests: state.guests
})

export default connect(mapStateToProps, { submitRsvp })(Rsvp)