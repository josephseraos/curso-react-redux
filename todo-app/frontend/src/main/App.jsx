import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'

import Todo from '../todo/Todo'
import About from '../about/About'

class App extends Component {
    render() {
        return (
            <div>
                <Todo />
                <About />
            </div>
        )
    }
}

export default App
