import React from 'react'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#/todos">
            <i class="fas fa-calendar-check"></i> Navbar
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#/todos">Tarefas <span className="sr-only">(página atual)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/about">Sobre</a>
                </li>
            </ul>
        </div>
    </nav>
)
