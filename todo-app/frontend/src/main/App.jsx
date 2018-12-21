import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import Todo from '../todo/Todo'
import About from '../about/About'
import Menu from '../template/Menu'

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <Menu />
                </header>
                <main>
                    <Todo />
                    <About />
                </main>
            </div>
        )
    }
}

export default App
