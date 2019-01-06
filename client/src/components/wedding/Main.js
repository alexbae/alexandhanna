import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

import logo from '../../assets/images/logo.svg'
import marker from '../../assets/images/marker.svg'
import main from '../../assets/images/catalina.jpg'

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
    static defaultProps = {
        center: {
          lat: 33.7466,
          lng: -118.379
        },
        zoom: 13
      };

    render() {
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
                    <img src={main} alt="main" />
                </div>
                <div className="center">
                    <div className="hr" />
                    <h2 className="header">From Alex Bae & Hanna Kim</h2>
                    <p>
                        평생을 같이할 반쪽을 만나 샌프란시스코와 뉴욕을 오가며
                        1년 넘게 한 연애의 종지부를 찍고 이제 같이 새로운 시작을 하려 합니다.
                        우리 결혼식에 오셔서 같이 축하해주시기 바랍니다.
                        여러가지 이유로 스몰웨딩을 결정하게 되었고 모든 분들을 초대하지 못함에 진심으로 사과드립니다.
                    </p>
                    <div className="hr" />
                    <h2 className="header">
                        Date    
                    </h2>
                    <div>
                        <strong>May 4, 2019</strong> (<span>{dday}</span> Day{dday > 1 ? 's' : ''} left)
                    </div>
                    <div className="hr" />
                    <h2 className="header">
                        Location
                    </h2>
                    <p>
                        <strong>Catalina View Gardens</strong> (<a href="http://www.catalinaviewgardens.com/photo-gallery/" target="_blank" rel="noopener noreferrer">
                        Venue photos<img className="icon-link" alt="link" src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%2336c%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%2336c%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E" /></a>)
                    </p>
                    <p>
                        <a href="https://goo.gl/maps/yYZwW95uWz42" target="_blank" rel="noopener noreferrer">
                            6001 palos Verdes Drive South, Rancho Palos Verdes, CA 90275                        
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