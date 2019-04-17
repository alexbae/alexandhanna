import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from './wedding/Footer'

import List from './LinkCreator'

class Admin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            password: "",
            isAdmin: false,
            loginFailed: null,
            loginAttempt: 0
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({ 
            isAdmin: sessionStorage.getItem("@wedding/admin")
        })
    }

    checkAdmin(code) {
        if (code === "sunland") {
            this.setState({ 
                loginFailed: false,
                isAdmin: true 
            })
            sessionStorage.setItem("@wedding/admin", true)
        } else {
            this.setState({ 
                password: "",
                loginFailed: true,
                loginAttempt: this.state.loginAttempt + 1
             })
        }
    }

    onChange(e) {
        if(e.target.name === 'email') {
            this.setState({
                emailError: false
            })
        }

        this.setState({ 
            [e.target.name]: e.target.value,
            hasErrors: false
        })
    }

    onSubmit(e) {
        e.preventDefault()

        const { password, loginAttempt } = this.state

        this.checkAdmin(password)

        if (loginAttempt > 5) {
            window.location.replace('http://alexandhanna.com')
        }
    }

    render() {
        const { isAdmin, loginFailed, password } = this.state
    
        return (
            <>
                <section>
                    <div className="center">
                        <h1 className="header mt-2">Admin</h1>
                        { loginFailed === true && 
                            <p className="error-box">
                                Password incorrect!
                            </p>
                        }
                        { !isAdmin ? (
                            <form>
                                <div>
                                    <label className="tag">enter password</label>
                                    <input type="password" placeholder="password" onChange={this.onChange} name="password" value={password} />
                                </div>
                                <input type="submit" value="SUMBIT" onClick={this.onSubmit} />
                            </form>
                            ) : (
                                <>
                                    <div>
                                        <div className="hr" />
                                        <h2 className="header">Wedding Expenses</h2>
                                        <ul className="admin-list">
                                            <List
                                                linkUrl={"https://docs.google.com/spreadsheets/d/1-B2rZJv8blG3vCKCA1JMyrh0O7_eKNERzezxlXxYX-Q/edit?usp=sharing"}
                                                title={"Open google spreadsheet"}
                                            />
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="hr" />
                                        <h2 className="header">Guests</h2>
                                        <ul className="admin-list">
                                            <li>
                                                <Link to="/guests">Guests page</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="hr" />
                                        <h2 className="header">Contract</h2>
                                        <ul className="admin-list">
                                            <List
                                                linkUrl={"https://www.dropbox.com/s/mj5222ols4uw1d1/CVG_agreement.PDF?dl=0"}
                                                title={"Venue: Catalina View Garden"}
                                            />
                                            <List
                                                linkUrl={"https://www.dropbox.com/s/schsrxs6939w65u/Photographer_agreement.PDF?dl=0"}
                                                title={"Phtographer: Michael Ryu"}
                                            />
                                            <List
                                                linkUrl={"https://www.dropbox.com/s/5wxg2ucz38ppiby/vatage-av_agreement.pdf?dl=0"}
                                                title={"Videographer: Vantage Av"}
                                            />
                                            <List
                                                linkUrl={"https://www.dropbox.com/s/s08d8mwngnup0se/VoxDjs_agreement.PDF?dl=0"}
                                                title={"DJ: Rigel"}
                                            />
                                            <List
                                                linkUrl={"https://www.dropbox.com/s/8p7rrwqe0iggxgc/ChefDora_agreement.PDF?dl=0"}
                                                title={"Catering: Chef Dora"}
                                            />
                                            <List
                                                linkUrl={"https://www.dropbox.com/s/ls1p4csej5e5mla/Aaliyahs_Vase-Invoice.pdf?dl=0"}
                                                title={"Invoice: no contract - Flower"}
                                            />
                                            <List
                                                linkUrl={"https://www.dropbox.com/s/4hrgz644q2joaf8/Bartender.PDF?dl=0"}
                                                title={"Bartender"}
                                            />
                                            <List
                                                linkUrl={"https://www.dropbox.com/s/itoputg4jyz9g97/Bright%20Rentals%20-%20New%20Client%20Packet.pdf?dl=0"}
                                                title={"Bright - New Client Packet"}
                                            />
                                            <List
                                                linkUrl={"https://www.dropbox.com/s/utzkhi9id6s2nim/Reservation-111114.pdf?dl=0"}
                                                title={"Bright - Reservation"}
                                            />
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="hr" />
                                        <h2 className="header">Receipt</h2>
                                        Venue
                                        <ul className="admin-list">
                                            <List
                                                linkUrl={"https://www.dropbox.com/s/jyx6zgwgh2vqaj9/CVG_first_deposit.pdf?dl=0"}
                                                title={"first deposit"}
                                            />
                                            <li>
                                                second deposit $6,000 (received : 1/3/2019 sent)
                                            </li>
                                            <li>
                                                third deposit $2,000 (received : 3/??/2019 sent)
                                            </li>
                                        </ul>
                                        Chef Dora
                                        <ul className="admin-list">
                                            <List
                                                linkUrl={"https://www.dropbox.com/s/j9qdcv1pf8hb3ry/INVOICE%20ALEX%20BAE%20AND%20HANNA%20KIM.pdf?dl=0"}
                                                title={"1st deposit"}
                                            />
                                            <List
                                                linkUrl={"https://www.dropbox.com/s/hxwgo01kgb40fo3/MENU%20SUMMARY%20HANNA%20KIM%20UPDATED-5.pdf?dl=0"}
                                                title={"2nd deposit"}
                                            />
                                        </ul>
                                        Michael Ryu
                                        <ul className="admin-list">
                                            <List
                                                linkUrl={"https://www.dropbox.com/s/0z6jnewrtpobe1a/photo_deposit.pdf?dl=0"}
                                                title={"deposit"}
                                            />
                                        </ul>
                                        VoxDjs
                                        <ul className="admin-list">
                                            <List
                                                linkUrl={"https://www.dropbox.com/s/sny2yyc9d0dahzk/voxDj_deposit.pdf?dl=0"}
                                                title={"deposit"}
                                            />
                                            <List
                                                linkUrl={"https://www.dropbox.com/s/2lmdr47d762ew3w/voxDj_payment.png?dl=0"}
                                                title={"final payment"}
                                            />
                                        </ul>
                                        Bartender - auto payment Sapphire credit card<br /><br />
                                        Bright Rentals
                                        <ul className="admin-list">
                                            <List
                                                linkUrl={"https://www.dropbox.com/s/75n6lmnqiwzx388/bright_deposit.pdf?dl=0"}
                                                title={"1st deposit"}
                                            />
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="hr" />
                                        <h2 className="header">Etc.</h2>
                                        <ul className="admin-list">
                                            <List
                                                linkUrl={"https://www.dropbox.com/s/3addkylaxgclhw6/Catalina%20View%20Gardens%20Guidelines%208.21.18.docx?dl=0"}
                                                title={"Catalina View Garden Guideline"}
                                            />
                                            <List
                                                linkUrl={"https://www.dropbox.com/s/en5n0pfpqhjapjz/voxDj_Wedding_Planning_Document.docx?dl=0"}
                                                title={"VoxDjs wedding planning document"}
                                            />
                                        </ul>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}

export default Admin