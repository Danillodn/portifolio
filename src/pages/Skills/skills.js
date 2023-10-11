import React from 'react'
import { Link } from 'react-router-dom'
import '../Skills/skills.css'

const contact = () => {
  return (
    <div>
            <header className='header'>
                <div className='logo'>
                    <Link to="/" className="logo" >DDN.</Link>
                </div>
                <div className='navbar'>
                <Link  to="/">
                        Início
                    </Link>
                    <Link to="/about">
                        Sobre
                    </Link>
                    <Link to="/projects">
                        Projetos
                    </Link>
                    <Link className="active" to="/skills">
                        Habilidades
                    </Link>
                </div>

            </header>

            <section className="home">
                <div className="home-content">
                    <h1>Olá, eu sou o Danillo</h1>
                    <h3>Full stack Develloper</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sed! Aliquid, quam. Illo voluptatibus,
                        quis ratione itaque temporibus iste sed obcaecati explicabo quae corporis nulla cupiditate, consequuntur
                        eveniet est error.</p>
                </div>
            </section>

        </div>
  )
}

export default contact