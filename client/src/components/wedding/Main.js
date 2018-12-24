import React, { Component } from 'react'

const now = new Date()
const end = new Date('05/04/2019 00:00 AM')
const gap = end - now
const day = 86400000
const cal = Math.floor(gap / day) + 1

const dday = gap > 0 ? (gap > day ? cal : 1 ) : 0

class Main extends Component {
    render() {
        return (
            <section>
                <h1>Alex Bae & Hanna Kim's Wedding</h1>
                <p>Saturday, May 4 at 3:30PM to 9:00PM</p>
                <p>
                    <b>
                        <a href="https://goo.gl/maps/yYZwW95uWz42" target="_blank" rel="noopener noreferrer">
                            Catalina View Gardens
                        </a>
                    </b>
                </p>
                <p>6001 palos Verdes Drive South, Rancho Palos Verdes, CA 90275</p>
                <h2>{dday} Day{dday > 1 ? 's' : ''} left</h2>
            </section>
        )
    }
}

export default Main