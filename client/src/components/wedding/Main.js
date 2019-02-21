import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

import logo from '../../assets/images/logo.svg'
import marker from '../../assets/images/marker.svg'
import main from '../../assets/images/main.jpg'

const now = new Date()
const end = new Date('05/04/2019 00:00 AM')
const gap = end - now
const day = 86400000
const cal = Math.floor(gap / day) + 1

const dday = gap > 0 ? (gap > day ? cal : 1 ) : 0

const Pointer = () => {
    return (
        <a href="https://goo.gl/maps/yYZwW95uWz42" target="_blank" rel="noopener noreferrer">
            <img className="marker" src={marker} alt="marker" />
        </a>
    ) 
}

class Main extends Component {
    constructor(props) {
        super(props)

        this.onClickEnglish = this.onClickEnglish.bind(this)
        this.onClickKorean = this.onClickKorean.bind(this)
    }

    static defaultProps = {
        center: {
          lat: 33.7466,
          lng: -118.379
        },
        zoom: 13
    }

    onClickEnglish() {
        this.props.setEnglish()
    }

    onClickKorean() {
        this.props.setKorean()
    }

    render() {
        const { isKor } = this.props
        
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
                    <div className="hr" />
                    <h2 className="header tac">
                        { isKor ? '신랑 배준만 과 신부 김해나리' : 'From Alex Bae & Hanna Kim' }
                    </h2>
                    <p className="tac">
                        {
                            isKor 
                                ? '뉴욕과 샌프란시스코를 오가며 키워온 저희 사랑의 결실을 이제 맺으려 합니다. 저희 결혼식은 여러 이유로  조촐하게 치르기로 했습니다. 저희 결혼을 축하해 주실 모든 분을 초대하지 못해 진심으로 죄송합니다. 마음으로나마 축하해주시면 감사하겠습니다.'
                                : 'English'
                        }
                        
                    </p>
                    <div className="hr" />
                    <h2 className="header tac">
                        {isKor 
                            ? '날짜'
                            : 'Date'
                        }<br />
                        {isKor
                            ? <span className="small-header"><span>{dday}</span> 일 남음</span>
                            : <span className="small-header"><span>{dday}</span> Day{dday > 1 ? 's' : ''} left</span>
                        }
                    </h2>
                    <div className="tac">
                        <strong>{isKor ? '2019년 5월 4일' : 'May 4, 2019'}</strong>&nbsp;&nbsp;
                        {isKor ? ' 오후 4시' : ' 4:00 PM'}
                    </div>
                    <div className="hr" />
                    <h2 className="header tac">
                        {isKor ? '장소' : 'Location'}
                    </h2>
                    <p className="tac">
                        <strong>Catalina View Gardens</strong> (<a href="http://www.catalinaviewgardens.com/photo-gallery/" target="_blank" rel="noopener noreferrer">
                        {isKor ? '식장 사진' : 'Venue photos'}<img className="icon-link" alt="link" src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%2336c%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%2336c%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E" /></a>)
                    </p>
                    <p className="tac">
                        <a href="https://goo.gl/maps/yYZwW95uWz42" target="_blank" rel="noopener noreferrer">
                            6001 Palos Verdes Drive South,<br /> Rancho Palos Verdes, CA 90275                        
                            <img className="icon-link" alt="link" src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%2336c%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%2336c%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E" />
                        </a>
                    </p>
                    <div className="map" style={{ height: '300px', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyDdqHWuM2wL25P-M_Pr682HtOUvvNhat50" }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                            <Pointer
                                lat={33.7466764}
                                lng={-118.379}
                                text={'Catalina View Gardens'}
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            </section>
        )
    }
}

export default Main