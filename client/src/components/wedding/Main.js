import React, { Component } from 'react'

import logo from '../../assets/images/logo.svg'
import main from '../../assets/images/main.jpg'

const now = new Date()
const end = new Date('05/04/2019 00:00 AM')
const gap = end - now
const day = 86400000
const cal = Math.floor(gap / day) + 1

const dday = gap > 0 ? (gap > day ? cal : 1 ) : 0

const KCOPY = {
    from: {
        title: '신랑 배준만 과 신부 김해나리',
        desc: '뉴욕과 샌프란시스코를 오가며 키워온 저희가 사랑의 결실을 이제 맺으려 합니다. 저희 결혼식은 여러 이유로  조촐하게 치르기로 했습니다. 저희 결혼을 축하해 주실 모든 분을 초대하지 못해 진심으로 죄송합니다. 마음으로나마 축하해주시면 감사하겠습니다.'
    },
    date: {
        title: '결혼식 날짜/시간',
        desc1: '2019년 5월 4일 토요일',
        desc2: '오후 4시'
    }
}

const ECOPY = {
    from: {
        title: 'From Alex Bae & Hanna Kim',
        desc: `Because you have shared in our lives and supported our love, we invite you to the celebration of our marriage. We can't wait to share our special day with you!`
    },
    date: {
        title: 'Event Date',
        desc1: 'Saturday, May 4th, 2019',
        desc2: 'at 4:00 in the afternoon'
    }
}

class Main extends Component {
    constructor(props) {
        super(props)

        this.onClickEnglish = this.onClickEnglish.bind(this)
        this.onClickKorean = this.onClickKorean.bind(this)
    }

    onClickEnglish() {
        this.props.setEnglish()
    }

    onClickKorean() {
        this.props.setKorean()
    }

    render() {
        const { isKor } = this.props
        const COPY = isKor ? KCOPY : ECOPY
        
        return (
            <section>
                <header className="main-header">
                    <img src={logo} alt="logo" className="logo" />
                    <div>
                        <p className="info">
                            <span>May 4, 2019</span>
                            <span>Catalina View Gardens</span>
                        </p>
                    </div>
                </header>                
                <div className="photo-placeholder">
                    <img src={main} alt="main" className="main-photo" />
                </div>
                <div className="center">
                    <div className="language">
                        <span onClick={this.onClickKorean} className={isKor ? "selected" : ""}>한글</span>
                        <span onClick={this.onClickEnglish} className={!isKor ? "selected" : ""}>English</span>
                    </div>
                    <p className="tac bigger mt3">
                        {COPY.from.desc}
                    </p>
                    <p className="tar mt2">
                        {COPY.from.title}
                    </p>
                    <div className="hr" />
                    <h2 className="header tac">
                        {COPY.date.title}<br />
                        <span className="small-header"><span>{dday}</span>
                            {isKor ? '일 남음' : ` day${dday > 1 ? 's' : ''} left`}
                        </span>
                    </h2>
                    <div className="tac">
                        <strong>{COPY.date.desc1}</strong><br />
                        {COPY.date.desc2}
                    </div>
                </div>
            </section>
        )
    }
}

export default Main