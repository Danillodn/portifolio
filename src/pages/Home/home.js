import React from 'react'
import '../Home/home.css'
import { Link } from 'react-router-dom'


const home = () => {
    return (
        <div>
            <header className='header'>
                <div className='logo'>
                    <Link to="/" className="logo" >DDN.</Link>
                </div>
                <div className='navbar'>
                <Link className="active" to="/">
                        Início
                    </Link>
                    <Link to="/about">
                        Sobre
                    </Link>
                    <Link to="/projects">
                        Projetos
                    </Link>
                    <Link to="/skills">
                        Habilidades
                    </Link>
                </div>

            </header>

            <section className="home">
                <div className="home-content">
                    <h1>Olá,</h1>
                    <h1>Eu sou o Danillo,</h1>
                    <h1>Desenvolvedor web</h1>
                    <h3>Full stack Develloper</h3>
                </div>
            </section>

        </div>

    )
}

export default home