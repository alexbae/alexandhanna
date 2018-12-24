import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

import logo from '../../assets/images/logo.svg'
import marker from '../../assets/images/marker.svg'

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
                <div className="photo-placeholder">Coming soon...</div>
                <div className="center">
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
                        <a href="https://goo.gl/maps/yYZwW95uWz42" target="_blank" rel="noopener noreferrer">
                            Catalina View Gardens
                        </a>
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