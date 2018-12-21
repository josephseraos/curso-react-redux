import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import Routes from './Routes'
import Menu from '../template/Menu'

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Menu />
                    <Routes />
                </Fragment>
            </Router>
        )
    }
}

export default App
