import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Alex Bae & Hanna Kim's Wedding</h1>
                <p>Saturday, May 4 at 3:30PM to 9:00PM</p>
                <p>
                    <b>
                        <a href="https://goo.gl/maps/yYZwW95uWz42" target="_blank">
                            Catalina View Gardens
                        </a>
                    </b>
                </p>
                <p>6001 palos Verdes Drive South, Rancho Palos Verdes, CA 90275</p>
            </div>
        );
    }
}

export default App;
