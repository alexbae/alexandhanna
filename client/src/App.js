import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Wedding from './components/wedding'
import Guests from './components/Guests'

import './App.css'

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <Router>
                    <div className="App">
                        <Route exact path="/" component={Wedding} />
                        <Route exact path='/guests' component={Guests} />
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App
