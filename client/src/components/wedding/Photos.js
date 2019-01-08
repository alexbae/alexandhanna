import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import catalina from '../../assets/images/catalina.jpg'

class Photos extends Component {
    render() {
        return (
            <section>
                <div className="center">
                    <div className="hr" />
                    <h2 className="header">Photos</h2>
                    <Carousel>
                        <div>
                            <img src={catalina} />
                        </div>
                        <div>
                            <img src={catalina} />
                        </div>
                    </Carousel>
                </div>
            </section>
        )
    }
}

export default Photos