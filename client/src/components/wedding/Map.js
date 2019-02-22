import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

import marker from '../../assets/images/marker.svg'

const Pointer = () => {
    return (
        <a href="https://goo.gl/maps/yYZwW95uWz42" target="_blank" rel="noopener noreferrer">
            <img className="marker" src={marker} alt="marker" />
        </a>
    ) 
}

class Map extends Component {
    static defaultProps = {
        center: {
          lat: 33.7466,
          lng: -118.379
        },
        zoom: 13
    }

    render() {
        const { isKor } = this.props
        
        return (
            <div className="center">
                <div className="hr" />
                <h2 className="header tac">
                    {isKor ? '결혼식 장소' : 'Event Location'}
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
        )
    }
}

export default Map