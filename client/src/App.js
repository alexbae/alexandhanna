import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Wedding from './components/wedding'
import Guests from './components/Guests'
import Admin from './components/Admin'

import './App.css'

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <Router>
                    <div className="App">
                        <Switch>
                            <Route exact path="/" component={Wedding} />
                            <Route path="/guests" component={Guests} />
                            <Route paht="/admin" component={Admin} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App
