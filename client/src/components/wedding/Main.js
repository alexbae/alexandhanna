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
                    <h2 className="header">Story</h2>
                    <p>
                        서로 다르고도 너무 닮은 두 사람이 아름다운 인연으로 연인 사이가 되어 샌프란시스코와 뉴욕을 오가며
                        1년 넘게 한 연애의 종지부를 찍고 이제 같이 새로운 시작을 하려 합니다.
                        우리 결혼식에 오셔서 같이 축하해주시기 바랍니다.
                    </p>
                    <h2 className="header">
                        Date    
                    </h2>
                    <div>
                        May 4, 2019 (<span>{dday}</span> Day{dday > 1 ? 's' : ''} left)
                    </div>
                    <h2 className="header">
                        Location
                    </h2>
                    <p>
                        Catalina View Gardens 
                        (<a href="https://goo.gl/maps/yYZwW95uWz42" target="_blank" rel="noopener noreferrer">Get directions</a>)
                    </p>
                    <p>
                        6001 palos Verdes Drive South, Rancho Palos Verdes, CA 90275
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