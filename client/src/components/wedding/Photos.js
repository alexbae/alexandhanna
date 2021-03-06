import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import pic01 from '../../assets/images/engage/01.JPG'
import pic02 from '../../assets/images/engage/02.JPG'
import pic03 from '../../assets/images/engage/03.JPG'
import pic04 from '../../assets/images/engage/04.JPG'
import pic05 from '../../assets/images/engage/05.JPG'
import pic07 from '../../assets/images/engage/07.JPG'
import pic08 from '../../assets/images/engage/08.JPG'
import pic10 from '../../assets/images/engage/10.JPG'
import pic11 from '../../assets/images/engage/11.JPG'
import pic12 from '../../assets/images/engage/12.JPG'
import pic13 from '../../assets/images/engage/13.JPG'
import pic14 from '../../assets/images/engage/14.JPG'
import pic15 from '../../assets/images/engage/15.JPG'

class Photos extends Component {
    render() {
        return (
            <section>
                <div className="center">
                    <div className="hr" />
                    <h2 className="header tac">Photos</h2>
                    <Carousel dynamicHeight={true}>
                        <div>
                            <img src={pic01} alt="wedding01" />
                        </div>
                        <div>
                            <img src={pic02} alt="wedding02" />
                        </div>
                        <div>
                            <img src={pic03} alt="wedding03" />
                        </div>
                        <div>
                            <img src={pic04} alt="wedding04" />
                        </div>
                        <div>
                            <img src={pic05} alt="wedding05" />
                        </div>
                        <div>
                            <img src={pic07} alt="wedding07" />
                        </div>
                        <div>
                            <img src={pic08} alt="wedding08" />
                        </div>
                        <div>
                            <img src={pic10} alt="wedding10" />
                        </div>
                        <div>
                            <img src={pic11} alt="wedding11" />
                        </div>
                        <div>
                            <img src={pic12} alt="wedding12" />
                        </div>
                        <div>
                            <img src={pic13} alt="wedding13" />
                        </div>
                        <div>
                            <img src={pic14} alt="wedding14" />
                        </div>
                        <div>
                            <img src={pic15} alt="wedding15" />
                        </div>
                    </Carousel>
                </div>
            </section>
        )
    }
}

export default Photos