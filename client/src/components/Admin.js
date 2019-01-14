import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from './wedding/Footer'

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
                                            <li>
                                                <a href="https://docs.google.com/spreadsheets/d/1-B2rZJv8blG3vCKCA1JMyrh0O7_eKNERzezxlXxYX-Q/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                                    Open google spreadsheet
                                                    <img className="icon-link" alt="link" src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%2336c%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%2336c%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E" />
                                                </a>
                                            </li>
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
                                        <h2 className="header">Agreements</h2>
                                        <ul className="admin-list">
                                            <li>
                                                <a href="https://www.dropbox.com/s/mj5222ols4uw1d1/CVG_agreement.PDF?dl=0" target="_blank" rel="noopener noreferrer">
                                                    Venue: Catalina View Garden
                                                    <img className="icon-link" alt="link" src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%2336c%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%2336c%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.dropbox.com/s/schsrxs6939w65u/Photographer_agreement.PDF?dl=0" target="_blank" rel="noopener noreferrer">
                                                    Phtographer: Michael Ryu
                                                    <img className="icon-link" alt="link" src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%2336c%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%2336c%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.dropbox.com/s/s08d8mwngnup0se/VoxDjs_agreement.PDF?dl=0" target="_blank" rel="noopener noreferrer">
                                                    DJ: Rigel
                                                    <img className="icon-link" alt="link" src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%2336c%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%2336c%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="hr" />
                                        <h2 className="header">Receipt</h2>
                                        Venue
                                        <ul className="admin-list">
                                            <li>
                                                <a href="https://www.dropbox.com/s/jyx6zgwgh2vqaj9/CVG_first_deposit.pdf?dl=0" target="_blank" rel="noopener noreferrer">
                                                    first deposit
                                                    <img className="icon-link" alt="link" src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%2336c%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%2336c%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E" />
                                                </a>
                                            </li>
                                            <li>
                                                second deposit (received : 1/3/2019 sent)
                                            </li>
                                        </ul>
                                        Michael Ryu
                                        <ul className="admin-list">
                                            <li>
                                                <a href="https://www.dropbox.com/s/0z6jnewrtpobe1a/photo_deposit.pdf?dl=0" target="_blank" rel="noopener noreferrer">
                                                    deposit
                                                    <img className="icon-link" alt="link" src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%2336c%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%2336c%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E" />
                                                </a>
                                            </li>
                                        </ul>
                                        VoxDjs
                                        <ul className="admin-list">
                                            <li>
                                                <a href="https://www.dropbox.com/s/sny2yyc9d0dahzk/voxDj_deposit.pdf?dl=0" target="_blank" rel="noopener noreferrer">
                                                    deposit
                                                    <img className="icon-link" alt="link" src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%2336c%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%2336c%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="hr" />
                                        <h2 className="header">Etc.</h2>
                                        <ul className="admin-list">
                                            <li>
                                                <a href="https://www.dropbox.com/s/3addkylaxgclhw6/Catalina%20View%20Gardens%20Guidelines%208.21.18.docx?dl=0" target="_blank" rel="noopener noreferrer">
                                                    Catalina View Garden Guideline
                                                    <img className="icon-link" alt="link" src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%2336c%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%2336c%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.dropbox.com/s/en5n0pfpqhjapjz/voxDj_Wedding_Planning_Document.docx?dl=0" target="_blank" rel="noopener noreferrer">
                                                    VoxDjs wedding planning document
                                                    <img className="icon-link" alt="link" src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%2336c%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%2336c%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E" />
                                                </a>
                                            </li>
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