import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitRsvp } from '../../actions/guestsActions'

const KCOPY = {
    header: 'RSVP',
    desc: '지정테이블이니 4월 1일까지 참석여부를 꼭 알려주세요.',
    error: '양식에 맞게 작성하신 후 다시 보내기를 눌러주세요.',
    submitted: '이미 RSVP를 보내신 적이 있으시네요. 수정을 원하시면 신랑이나 신부 측에 직접 연락을 주세요.',
    attend: '감사합니다, 결혼식 때 뵙겠습니다.',
    notAttend: '너무 아쉽네요, 그래도 결혼 후 꼭 만나서 축하해주세요!',
    form: {
        q1: '참석하시겠습니까?',
        q1a1: '네',
        q1a2: '아니요',
        q2: '어느 쪽 하객이신가요?',
        q2a1: '신랑',
        q2a2: '신부',
        q3: '성함을 적어주세요 (영문으로 부탁드립니다.)',
        q4: '이메일을 적어주세요',
        q5: '성인이 총 몇 명이신가요? (본인 포함)',
        q6: '어린이가 있으신가요?'
    },
    button: '신부랑 신랑에게 보내기'
}

const ECOPY = {
    header: 'RSVP',
    desc: 'Tables are resered, the favor of a reply is requested by April 1st.',
    error: 'Please correct the fields and send it again.',
    submitted: 'You already Submitted this RSVP. If you want to modify your RSVP, please contact to Alex or Hanna!',
    attend: 'Thank you for you said will attend our wedding, see you at our wedding!',
    notAttend: 'Sorry to hear that, but please meet us in near future!',
    form: {
        q1: 'Will you attend?',
        q1a1: 'Will attend',
        q1a2: 'Unable to attend',
        q2: 'Which side are you?',
        q2a1: 'Groom',
        q2a2: 'Bride',
        q3: 'What your name?',
        q4: 'What is your email?',
        q5: 'Total adults (includes you)',
        q6: 'Total kids'
    },
    button: 'Send to Hanne and Alex'
}

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
            userExists: false,
            alreadySumbitted: false,
            emailError: false
        }

        this.checkEmail = this.checkEmail.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({
            alreadySumbitted: localStorage.getItem("@wedding/submitted")
        })
    }

    isValid(data) {
        if (data.side == null || data.name.trim() === "" || data.email.trim() === "") {
            return false
        }
        return true
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

    checkEmail(e) {
        const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        
        const matchFormat = e.target.value.match(mailformat) ? true : false

        this.setState({
            hasErrors: !matchFormat,
            emailError: !matchFormat
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
            localStorage.setItem("@wedding/submitted", true)
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
        const { sumbitted, attend, hasErrors, userExists, alreadySumbitted, emailError } = this.state

        const COPY = this.props.isKor ? KCOPY : ECOPY

        return (
            <section>
                <div className="center">
                    <div className="hr" />
                    <h2 className="header tac" id="rsvp">{COPY.header}</h2>
                    <p className="pb-1 tac">
                        {COPY.desc}
                    </p>
                    {hasErrors &&
                        <p className="error-box mb-1">
                            {COPY.error}
                        </p>
                    }
                    { alreadySumbitted ?
                        <p className="message-box mb-1">
                            {COPY.submitted}
                        </p>
                        :
                        sumbitted
                            ? <p className="message-box">
                                {userExists 
                                    ? COPY.sumbitted
                                    : attend === "1"
                                        ? COPY.attend
                                        : COPY.notAttend
                                }
                            </p>
                            : <form>
                                <div>
                                    <label className="tag">{COPY.form.q1}</label>
                                    <label><input type="radio" name="attend" value="1" onChange={this.onChange} />{COPY.form.q1a1}</label>
                                    <label><input type="radio" name="attend" value="0" onChange={this.onChange} />{COPY.form.q1a2}</label>
                                </div>
                                <div>
                                    <label className="tag">{COPY.form.q2}</label>
                                    <label><input type="radio" name="side" value="groom" onChange={this.onChange} />{COPY.form.q2a1}</label>
                                    <label><input type="radio" name="side" value="bride" onChange={this.onChange} />{COPY.form.q2a2}</label>
                                </div>
                                <div>
                                    <label className="tag">{COPY.form.q3}</label>
                                    <input type="text" name="name" onChange={this.onChange} placeholder="Alex Bae" />
                                </div>
                                <div>
                                    <label className="tag">{COPY.form.q4}</label>
                                    <input className={emailError ? "input-error" : ""} type="text" name="email" onChange={this.onChange} onBlur={this.checkEmail} placeholder="alexbae84@gmail.com" />
                                </div>
                                {attend === "1" && (
                                    <>
                                        <div>
                                            <label className="tag">{COPY.form.q5}</label>
                                            <select name="adults" onChange={this.onChange}>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="tag">{COPY.form.q6}</label>
                                            <select name="kids" onChange={this.onChange}>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                    </>
                                )}
                                <input type="submit" value={COPY.button} disabled={hasErrors ? true : false} onClick={this.onSubmit} />
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