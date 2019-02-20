import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setEnglish, setKorean } from '../../actions/langActions'

import Main from './Main'
import Rsvp from './Rsvp'
import Others from './Others'
import Photos from './Photos'
import Registry from './Registry'
import Footer from './Footer'

class Wedding extends Component {
    render() {
        const { setEnglish, setKorean, lang } = this.props
        const isKor = lang.lang === 'korean' ? true : false

        return (
            <>
                <Main setEnglish={setEnglish} setKorean={setKorean} isKor={isKor} />
                <Rsvp isKor={isKor} />
                <Photos />
                <Registry />
                <Others />
                <Footer />
            </>
        )
    }
}

const mapStateToProps = state => ({
    lang: state.lang
})

export default connect(mapStateToProps, { setEnglish, setKorean })(Wedding)