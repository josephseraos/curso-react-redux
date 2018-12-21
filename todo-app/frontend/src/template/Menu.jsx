import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/todos">
            <i className="fas fa-calendar-check"></i> Navbar
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/todos">Tarefas <span className="sr-only">(página atual)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">Sobre</Link>
                </li>
            </ul>
        </div>
    </nav>
)
